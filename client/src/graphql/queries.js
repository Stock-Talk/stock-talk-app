import gql from 'graphql-tag';

// get all posts -- need to query all users posts, most recent first
export const ALL_POSTS_QUERY = gql`
  query getPosts($username: String) {
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

// get all user posts for profile page
export const USER_POSTS_QUERY = gql`
  query getUserPosts($username: String) {
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

// get single post
export const SINGLE_POST_QUERY = gql`
  query post($id: ID!) {
    post(id: $id) {
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

// get a user by username
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      friendCount
      friends {
        _id
        username
      }
      posts {
        _id
        postText
        createdAt
        commentCount
        comments {
          _id
          createdAt
          username
          commentBody
        }
      }
    }
  }
`;

// get friends
// export const QUERY_FRIENDS = gql`
//   {
//     me {
//       _id
//       username
//
//       friendCount
//       friends {
//         _id
//         username
//       }
//     }
//   }
// `;

// get my profile info
export const QUERY_ME = gql`
  {
    me {
      _id
      username
      posts {
        _id
        postText
        createdAt
        commentCount
        comments {
          _id
          commentBody
          username
          createdAt
        }
      }
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;

// export const QUERY_ME_BASIC = gql`
//   {
//     me {
//       _id
//       username
//       email
//       friendCount
//       friends {
//         _id
//         username
//       }
//     }
//   }
// `;
