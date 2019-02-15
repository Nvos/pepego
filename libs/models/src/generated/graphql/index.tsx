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

export type TodoChangesVariables = {};

export type TodoChangesSubscription = {
  __typename?: 'Subscription';

  todoChanges: TodoChangesTodoChanges;
};

export type TodoChangesTodoChanges = {
  __typename?: 'Todo';

  id: string;

  text: string;

  done: boolean;
};

export type CreateTodoVariables = {
  text: string;
  userId: string;
};

export type CreateTodoMutation = {
  __typename?: 'Mutation';

  createTodo: CreateTodoCreateTodo;
};

export type CreateTodoCreateTodo = {
  __typename?: 'Todo';

  id: string;

  text: string;

  done: boolean;
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
export const TodoChangesDocument = gql`
  subscription TodoChanges {
    todoChanges {
      id
      text
      done
    }
  }
`;
export class TodoChangesComponent extends React.Component<
  Partial<
    ReactApollo.SubscriptionProps<TodoChangesSubscription, TodoChangesVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Subscription<TodoChangesSubscription, TodoChangesVariables>
        subscription={TodoChangesDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type TodoChangesProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<TodoChangesSubscription, TodoChangesVariables>
> &
  TChildProps;
export function TodoChangesHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        TodoChangesSubscription,
        TodoChangesVariables,
        TodoChangesProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    TodoChangesSubscription,
    TodoChangesVariables,
    TodoChangesProps<TChildProps>
  >(TodoChangesDocument, operationOptions);
}
export const CreateTodoDocument = gql`
  mutation CreateTodo($text: String!, $userId: String!) {
    createTodo(input: { text: $text, userId: $userId }) {
      id
      text
      done
    }
  }
`;
export class CreateTodoComponent extends React.Component<
  Partial<ReactApollo.MutationProps<CreateTodoMutation, CreateTodoVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<CreateTodoMutation, CreateTodoVariables>
        mutation={CreateTodoDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type CreateTodoProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<CreateTodoMutation, CreateTodoVariables>
> &
  TChildProps;
export type CreateTodoMutationFn = ReactApollo.MutationFn<
  CreateTodoMutation,
  CreateTodoVariables
>;
export function CreateTodoHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        CreateTodoMutation,
        CreateTodoVariables,
        CreateTodoProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    CreateTodoMutation,
    CreateTodoVariables,
    CreateTodoProps<TChildProps>
  >(CreateTodoDocument, operationOptions);
}
