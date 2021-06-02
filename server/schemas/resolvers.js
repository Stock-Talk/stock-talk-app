const { User, Post } = require('../models');
const { AuthenticationError, ApolloError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { models } = require('../config/connection');

// const {ApolloServer, gql, GraphQLUpload} = require('apollo-server');


const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_ID,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION,
    bucket: process.env.AWS_S3_BUCKET_NAME
});

const s3 = new AWS.S3({ region: process.env.AWS_REGION });

const s3DefaultParams = {
    ACL: 'public-read',
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Conditions: [
        ['content-length-range', 0, 256000] // 256k Kb
        
    ],
};

const handleFileUpload = async file => {
    const { createReadStream, filename } = await file;

    const key = uuidv4();

    return new Promise((resolve, reject) => {
        debugger;
        s3.upload(
            {
                ...s3DefaultParams,
                // Body: "this is body test",
                Body: createReadStream(),
                Key: `${key}/${filename}`,
            },
            (err, data) => {
                if (err) {
                    console.log('error uploading...', err);
                    reject(err);
                } else {
                    console.log('successfully uploaded file...', data);
                    resolve(data);
                }
            },
        );
    });
};

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
        uploadFile: async (parent, { file }, context) => {
            if (context.user) {
                const response = await handleFileUpload(file);
                console.log("this is response line 156" + JSON.stringify(response));
                var newFile = JSON.stringify(response);
                console.log("this is newFile" + newFile);
                var parsedFile = JSON.parse(newFile);
                console.log("this is parsedFile Location " + parsedFile.Location);
                // return parsedFile.Location;
                return parsedFile;
                // return response;
            }
            throw new AuthenticationError('You need to be logged in!');
        }
    }
};

module.exports = resolvers;
