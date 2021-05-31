import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser(firstName: $firstName, lastName: $lastName, $username: String!, $email: String!, $password: String!) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
      passwordConfirm: $passwordConfirm
    ) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_FRIEND = gql`
  mutation addFriend($id: ID!) {
    addFriend(friendId: $id) {
      _id
      username
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost($postText: String!) {
    addPost(postText: $postText) {
      _id
      postText
      createdAt
      username
      commentCount
      comments {
        _id
        commentBody
        username
        createdAt
      }
    }
  }
`;

// export const CREATE_POST = gql`
//   mutation createPost($postText: String!) {
//     createPost(postText: $postText) {
//       _id
//       postText
//       createdAt
//       username
//       friends {
//         id
//         username
//         createdAt
//       }
//       friendCount
//       comments {
//         _id
//         commentBody
//         username
//         createdAt
//       }
//       commentCount
//     }
//   }
// `;

//Need to add resolver??????
export const DELETE_POST = gql`
  mutation deletePost($postId: ID!) {
    deletePost(postId: $postId)
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($postId: ID!, $commentBody: String!) {
    addComment(postId: $postId, commentBody: $commentBody) {
      _id
      commentBody
      createdAt
      username
      }
    }
  }
`;

//Need to add resolvers???????
export const DELETE_COMMENT = gql`
  mutation deleteComment($postId: ID!, $commentId: ID!) {
    deleteComment(postId: $postId, commentId: $commentId) {
      _id
      comments {
        id
        username
        createdAt
        commentbody
      }
      commentCount
    }
  }
`;
