// THIS IS A GENERATED FILE, DO NOT EDIT IT!
// tslint:disable
true;
export type Maybe<T> = T | null;

export interface NewTodo {
  text: string;

  userId: string;
}

export interface EditTodo {
  id: string;

  text: string;

  done: boolean;

  lastEditedById: string;
}

export interface NewUser {
  name: string;
}

export type Time = any;

// ====================================================
// Documents
// ====================================================

export type TodosVariables = {};

export type TodosQuery = {
  __typename?: 'Query';

  todos: TodosTodos[];
};

export type TodosTodos = {
  __typename?: 'Todo';

  id: string;

  text: string;
};

import * as ReactApollo from 'react-apollo';
import * as React from 'react';

import gql from 'graphql-tag';

// ====================================================
// Components
// ====================================================

export const TodosDocument = gql`
  query Todos {
    todos {
      id
      text
    }
  }
`;
export class TodosComponent extends React.Component<
  Partial<ReactApollo.QueryProps<TodosQuery, TodosVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<TodosQuery, TodosVariables>
        query={TodosDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type TodosProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<TodosQuery, TodosVariables>
> &
  TChildProps;
export function TodosHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        TodosQuery,
        TodosVariables,
        TodosProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    TodosQuery,
    TodosVariables,
    TodosProps<TChildProps>
  >(TodosDocument, operationOptions);
}
