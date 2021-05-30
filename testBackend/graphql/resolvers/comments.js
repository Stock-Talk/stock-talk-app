const { AuthenticationError, UserInputError } = require('apollo-server');

const Post = require('../../models/Post');
const checkAuth = require('../../utils/auth');

module.exports = {
  Mutation: {
    // CREATE comment
    createComment: async (_, { postId, body }, context) => {
      // context... is user logged in
      const { username } = checkAuth(context);
      // once logged in
      if (body.trim() === '') {
        throw new UserInputError('Comment is empty', {
          errors: {
            body: 'Comment body must not empty',
          },
        });
      }

      const post = await Post.findById(postId);

      if (post) {
        post.comments.unshift({
          body,
          username,
          createdAt: new Date().toISOString(),
        });
        await post.save();
        return post;
      } else throw new UserInputError('Post not found');
    },
    // DELETE Comment
    async deleteComment(_, { postId, commentId }, context) {
      const { username } = checkAuth(context);

      const post = await Post.findById(postId);

      if (post) {
        const commentIndex = post.comments.findIndex((c) => c.id === commentId);

        if (post.comments[commentIndex].username === username) {
          post.comments.splice(commentIndex, 1);
          await post.save();
          return post;
        } else {
          throw new AuthenticationError('Action denied');
        }
      } else {
        throw new UserInputError('Post not found');
      }
    },
  },
};
