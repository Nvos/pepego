import React from 'react';
import {
  TodosHOC,
  TodosQuery,
  TodosVariables,
  TodosProps,
  CreateTodoHOC,
  CreateTodoProps,
  CreateTodoMutation,
  CreateTodoVariables,
  CreateTodoComponent,
} from '@libs/models';
import { DataProps } from 'react-apollo';
import { TODOS_CHANGES, TODO_CREATE } from '@libs/api';
import { Card, CardTitle } from '@libs/ui';
import { produce } from 'immer';
import { MutationProps, Mutation } from 'react-apollo';
interface Props {}
interface State {
  text: String;
}

class TodoForm extends React.Component<Props, State> {
  readonly state: State = {
    text: '',
  };

  setText = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: event.target.value });
  };

  render() {
    const { text } = this.state;

    return (
      <Mutation mutation={TODO_CREATE}>
        {(createTodo, { loading, error }) => (
          <div>
            <form
              onSubmit={e => {
                e.preventDefault();
                createTodo({
                  variables: {
                    userId: '7a0bd056-7845-4250-89bc-84c9df362774',
                    text,
                  },
                });
              }}
            >
              <input onChange={this.setText} />
              {error && 'Error!'}
              <button type="submit">{loading ? 'Loading' : 'Add Todo'}</button>
            </form>
          </div>
        )}
      </Mutation>
    );
  }
}

export default TodoForm;
