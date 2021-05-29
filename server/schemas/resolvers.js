// load config data from .env file
require("dotenv").config();
const { User, Post } = require('../models');
const { AuthenticationError, ApolloError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const AWS = require('aws-sdk');
const { avatarUploader } = require('../uploaders');


// update AWS config env data
// AWS.config.update({
//     accessKeyId: process.env.AWS_ACCESS_ID,
//     secretAccessKey: process.env.AWS_SECRET_KEY,
//     region: process.env.AWS_REGION,
// });

// const s3 = new AWS.S3({ region: process.env.AWS_REGION });

// my default params for s3 upload
// I have a max upload size of 256k kb
// const s3DefaultParams = {
//     ACL: 'public-read',
//     Bucket: process.env.S3_BUCKET_NAME,
//     Conditions: [
//         ['content-length-range', 0, 256000], // 256k kb
//         { acl: 'public-read' },
//     ],
// };

// the actual upload happens here
// const handleFileUpload = async file => {
//     const { createReadStream, filename } = await file;

//     const key = uuidv4();

//     return new Promise((resolve, reject) => {
//         s3.upload(
//             {
//                 ...s3DefaultParams,
//                 Body: createReadStream(),
//                 Key: `${key}/${filename}`,
//             },
//             (err, data) => {
//                 if (err) {
//                     console.log('error uploading...', err);
//                     reject(err);
//                 } else {
//                     console.log('successfully uploaded file...', data);
//                     resolve(data);
//                 }
//             },
//         );
//     });
// };

// const cloudinary = require('cloudinary').v2;
const { models } = require('../config/connection');
const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('posts')
                    .populate('friends');

                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },
        posts: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Post.find(params).sort({ createdAt: -1 });
        },
        post: async (parent, { _id }) => {
            return Post.findOne({ _id });
        },
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('friends')
                .populate('posts');
        },
        // get a user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('friends')
                .populate('posts');
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            console.log(args);
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
        addPost: async (parent, args, context) => {
            if (context.user) {
                const post = await Post.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { posts: post._id } },
                    { new: true }
                );

                return post;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        addComment: async (parent, { postId, commentBody }, context) => {
            if (context.user) {
                const updatedPost = await Post.findOneAndUpdate(
                    { _id: postId },
                    { $push: { comments: { commentBody, username: context.user.username } } },
                    { new: true, runValidators: true }
                );

                return updatedPost;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        addFriend: async (parent, { friendId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { friends: friendId } },
                    { new: true }
                ).populate('friends');

                return updatedUser;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        uploadAvatar: async (parent, { file }, context) => {
            if (context.user) {
                const { createReadStream, filename, mimetype, encoding } = await file;

                const uri = await avatarUploader.upload(createReadStream(), {
                    filename,
                    mimetype,
                });

                return {
                    filename,
                    mimetype,
                    encoding,
                    uri,
                };
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },
    // uploadFile: async (parent, { file }, context) => {
    //     const response = await handleFileUpload(file);

    //     return response;
    // }
    // uploadAvatar: async (parent, { avatar }, context) => {
    //     const { createReadStream } = await avatar;
    //     console.log(createReadStream);
    //     cloudinary.config({
    //         cloud_name: process.env.CLOUD_NAME,
    //         api_key: process.env.API_KEY,
    //         api_secret: process.env.API_SECRET
    //     })

    //     try {
    //         const result = await new Promise((resolve, reject) => {
    //             createReadStream().pipe(
    //                 cloudinary.uploader.upload_stream((error, result) => {
    //                     if (error) {
    //                         reject(error);
    //                     }
    //                     resolve(result);
    //                 })
    //             )
    //         })
    //         if (context.user) {
    //             const updatedUser = await User.findByIdAndUpdate(
    //                 { _id: context.user._id },
    //                 { $set: { avatar: result.secure_url } },
    //                 { new: true }
    //             )

    //             return updatedUser;
    //             // const user = await models.User.findByPk(context.user_id)

    //             // await user.update({ avatar: result.secure_url })

    //             // return user;
    //         }

    //         throw new AuthenticationError('You need to be logged in!');
    //     } catch (error) {
    //         throw new ApolloError('There was a problem uploading your avatar.')
    //     }
    // }
}


module.exports = resolvers;
