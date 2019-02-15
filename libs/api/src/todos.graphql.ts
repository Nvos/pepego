import gql from 'graphql-tag';

export const TODOS = gql`
  query Todos {
    todos {
      id
      text
    }
  }
`;

export const TODOS_CHANGES = gql`
  subscription TodoChanges {
    todoChanges {
      id
      text
      done
    }
  }
`;