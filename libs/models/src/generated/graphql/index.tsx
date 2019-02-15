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

  text?: Maybe<string>;

  done?: Maybe<boolean>;

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

  done: boolean;

  user: TodosUser;

  createdAt: Time;

  lastEditedBy: Maybe<TodosLastEditedBy>;
};

export type TodosUser = {
  __typename?: 'User';

  id: string;

  name: string;
};

export type TodosLastEditedBy = {
  __typename?: 'User';

  id: string;

  name: string;
};

export type UsersVariables = {};

export type UsersQuery = {
  __typename?: 'Query';

  users: UsersUsers[];
};

export type UsersUsers = {
  __typename?: 'User';

  id: string;

  name: string;
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

  user: TodoChangesUser;

  createdAt: Time;

  lastEditedBy: Maybe<TodoChangesLastEditedBy>;
};

export type TodoChangesUser = {
  __typename?: 'User';

  id: string;

  name: string;
};

export type TodoChangesLastEditedBy = {
  __typename?: 'User';

  id: string;

  name: string;
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

  user: CreateTodoUser;

  createdAt: Time;

  lastEditedBy: Maybe<CreateTodoLastEditedBy>;
};

export type CreateTodoUser = {
  __typename?: 'User';

  id: string;

  name: string;
};

export type CreateTodoLastEditedBy = {
  __typename?: 'User';

  id: string;

  name: string;
};

export type EditTodoVariables = {
  id: string;
  text?: Maybe<string>;
  done?: Maybe<boolean>;
  lastEditedByID: string;
};

export type EditTodoMutation = {
  __typename?: 'Mutation';

  editTodo: Maybe<EditTodoEditTodo>;
};

export type EditTodoEditTodo = {
  __typename?: 'Todo';

  id: string;

  text: string;

  done: boolean;

  user: EditTodoUser;

  createdAt: Time;

  lastEditedBy: Maybe<EditTodoLastEditedBy>;
};

export type EditTodoUser = {
  __typename?: 'User';

  id: string;

  name: string;
};

export type EditTodoLastEditedBy = {
  __typename?: 'User';

  id: string;

  name: string;
};

export type TodoVariables = {
  id: string;
};

export type TodoQuery = {
  __typename?: 'Query';

  todo: Maybe<TodoTodo>;
};

export type TodoTodo = {
  __typename?: 'Todo';

  id: string;

  text: string;

  done: boolean;

  user: TodoUser;

  createdAt: Time;

  lastEditedBy: Maybe<TodoLastEditedBy>;
};

export type TodoUser = {
  __typename?: 'User';

  id: string;

  name: string;
};

export type TodoLastEditedBy = {
  __typename?: 'User';

  id: string;

  name: string;
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
export const UsersDocument = gql`
  query Users {
    users {
      id
      name
    }
  }
`;
export class UsersComponent extends React.Component<
  Partial<ReactApollo.QueryProps<UsersQuery, UsersVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<UsersQuery, UsersVariables>
        query={UsersDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type UsersProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<UsersQuery, UsersVariables>
> &
  TChildProps;
export function UsersHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        UsersQuery,
        UsersVariables,
        UsersProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    UsersQuery,
    UsersVariables,
    UsersProps<TChildProps>
  >(UsersDocument, operationOptions);
}
export const TodoChangesDocument = gql`
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
export const EditTodoDocument = gql`
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
export class EditTodoComponent extends React.Component<
  Partial<ReactApollo.MutationProps<EditTodoMutation, EditTodoVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<EditTodoMutation, EditTodoVariables>
        mutation={EditTodoDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type EditTodoProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<EditTodoMutation, EditTodoVariables>
> &
  TChildProps;
export type EditTodoMutationFn = ReactApollo.MutationFn<
  EditTodoMutation,
  EditTodoVariables
>;
export function EditTodoHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        EditTodoMutation,
        EditTodoVariables,
        EditTodoProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    EditTodoMutation,
    EditTodoVariables,
    EditTodoProps<TChildProps>
  >(EditTodoDocument, operationOptions);
}
export const TodoDocument = gql`
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
export class TodoComponent extends React.Component<
  Partial<ReactApollo.QueryProps<TodoQuery, TodoVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<TodoQuery, TodoVariables>
        query={TodoDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type TodoProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<TodoQuery, TodoVariables>
> &
  TChildProps;
export function TodoHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        TodoQuery,
        TodoVariables,
        TodoProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    TodoQuery,
    TodoVariables,
    TodoProps<TChildProps>
  >(TodoDocument, operationOptions);
}
