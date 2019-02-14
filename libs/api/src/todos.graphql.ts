import gql from "graphql-tag";

export const TODOS = gql`
  query Todos {
    todos {
      id
      text
    }
  }
`;
