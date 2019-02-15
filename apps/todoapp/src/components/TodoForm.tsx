import {CreateTodoComponent,} from '@libs/models';
import React from 'react';

interface Props {
  user: string;
}

interface State {
  text: string;
}

class TodoForm extends React.Component<Props, State> {
  readonly state: State = {
    text: '',
  };

  setText = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({...this.state, text: event.target.value});
  };


  render() {
    const {text} = this.state;
    const {user} = this.props;

    return (
      <CreateTodoComponent>
        {(createTodo, {loading, error}) => (
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
              <input onChange={this.setText}/>
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
