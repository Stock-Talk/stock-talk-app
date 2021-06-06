import gql from 'graphql-tag';

export const QUERY_POSTS = gql`
  query posts($username: String) {
    posts(username: $username) {
      _id
      postText
      createdAt
      username
      commentCount
      comments {
        _id
        createdAt
        username
        commentBody
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      friendCount
      posts {
        _id
        postText
        createdAt
        commentCount
        comments {
          _id
          createdAt
          commentBody
          username
        }
      }
      friends {
        _id
        username
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      friendCount
      posts {
        _id
        postText
        createdAt
        commentCount
        comments {
          _id
          createdAt
          commentBody
          username
        }
      }
      friends {
        _id
        username
      }
    }
  }
`;