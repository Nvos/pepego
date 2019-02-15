import gql from 'graphql-tag';

export const TODOS = gql`
  query Todos {
    todos {
      id
      text
      createdAt
      user {
        name
      }
    }
  }
`;

export const USERS = gql`
  query Users {
    users {
      id
      name
    }
  }
`;

export const TODOS_CHANGES = gql`
  subscription TodoChanges {
    todoChanges {
      id
      text
      done
      createdAt
      user {
        name
      }
    }
  }
`;

export const TODO_CREATE = gql`
  mutation CreateTodo($text: String!, $userId: String!) {
    createTodo(input: { text: $text, userId: $userId }) {
      id
      text
      done
      createdAt
      user {
        name
      }
    }
  }
`;
