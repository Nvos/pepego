import React from 'react';
import { TodosHOC, TodosQuery, TodosVariables, TodosProps } from '@libs/models';
import { DataProps } from 'react-apollo';
import { TODOS_CHANGES } from '@libs/api';
import { Card, CardTitle, CardFooter } from '@libs/ui';
import { produce } from 'immer';
import TodoForm from 'src/components/TodoForm';

interface Props {}

class TodoList extends React.Component<TodosProps<Props>> {
  componentWillMount() {
    const { subscribeToMore } = this.props.data;
    subscribeToMore({
      document: TODOS_CHANGES,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return prev;
        }

        const newMessage = subscriptionData.data.todoChanges;

        const newTodos = produce(prev.todos, draft => {
          const recordIndex = draft.findIndex(it => it.id === newMessage.id);
          if (recordIndex !== -1) {
            draft[recordIndex] = newMessage;
          } else {
            draft.push(newMessage);
          }
        });

        return {
          todos: newTodos,
        };
      },
    });
  }

  render() {
    const { todos, loading, error } = this.props.data;

    if (loading) {
      return <p>Loading</p>;
    }

    if (error) {
      return <p>Error</p>;
    }

    return (
      <div>
        <div style={{ padding: 12 }}>
          <TodoForm />
        </div>
        <div
          style={{
            justifyContent: 'center',
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          {todos.map(it => (
            <Card key={it.id} style={{ width: 300 }}>
              <CardTitle>{it.id}</CardTitle>
              {it.text}
              <CardFooter>{it.user.name}</CardFooter>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

export default TodosHOC({})(TodoList);
