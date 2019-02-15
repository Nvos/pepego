import gql from 'graphql-tag';

export const TODOS = gql`
  query Todos {
    todos {
      id
      text
      done
      user {
        id
        name
      }
      createdAt
      lastEditedBy {
        id
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
      user {
        id
        name
      }
      createdAt
      lastEditedBy {
        id
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
      user {
        id
        name
      }
      createdAt
      lastEditedBy {
        id
        name
      }
    }
  }
`;

export const TODOS_UPDATE = gql`
  mutation EditTodo(
    $id: ID!
    $text: String
    $done: Boolean
    $lastEditedByID: ID!
  ) {
    editTodo(
      input: {
        id: $id
        text: $text
        done: $done
        lastEditedById: $lastEditedByID
      }
    ) {
      id
      text
      done
      user {
        id
        name
      }
      createdAt
      lastEditedBy {
        id
        name
      }
    }
  }
`;

const TODO = gql`
  query Todo($id: ID!) {
    todo(id: $id) {
      id
      text
      done
      user {
        id
        name
      }
      createdAt
      lastEditedBy {
        id
        name
      }
    }
  }
`;
