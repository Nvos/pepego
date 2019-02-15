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
  text: string;
  user: string;
}

class TodoForm extends React.Component<Props, State> {
  readonly state: State = {
    text: '',
    user: '7a0bd056-7845-4250-89bc-84c9df362774',
  };

  setText = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, text: event.target.value });
  };

  setUser = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ ...this.state, user: event.target.value });
  };

  render() {
    const { text, user } = this.state;

    return (
      <CreateTodoComponent>
        {(createTodo, { loading, error }) => (
          <div>
            <form
              onSubmit={e => {
                e.preventDefault();
                createTodo({
                  variables: {
                    userId: user,
                    text,
                  },
                });
              }}
            >
              <input onChange={this.setText} />
              <select onChange={this.setUser}>
                <option value={'7a0bd056-7845-4250-89bc-84c9df362774'}>
                  Jeff
                </option>
                <option value={'7a0bd056-7845-4250-89bc-84c9df362674'}>
                  Not Jeff
                </option>
              </select>
              {error && 'Error!'}
              <button type="submit">{loading ? 'Loading' : 'Add Todo'}</button>
            </form>
          </div>
        )}
      </CreateTodoComponent>
    );
  }
}

export default TodoForm;
