// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type Post {
    _id: ID
    postText: String
    createdAt: String
    username: String
    commentCount: Int
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentBody: String
    createdAt: String
    username: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    friendCount: Int
    avatarUpload: String
    posts: [Post]
    friends: [User]
  }

  type S3Object {
    eTag: String
    location: String
    key: String
    bucket: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(_id: ID!): Post
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!, avatarUrl: String): Auth
    addPost(postText: String!): Post
    addComment(postId: ID!, commentBody: String!): Post
    addFriend(friendId: ID!): User
    uploadFile(file: Upload!): S3Object
  }
`;

// export the typeDefs
module.exports = typeDefs;