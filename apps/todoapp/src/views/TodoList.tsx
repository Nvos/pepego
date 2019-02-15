import React from 'react';
import { TodosHOC, TodosQuery, TodosVariables, TodosProps } from '@libs/models';
import { DataProps } from 'react-apollo';
import { TODOS_CHANGES } from '@libs/api';
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

        return {
          todos: [...prev.todos, newMessage],
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
      <div style={{ justifyContent: 'center' }}>
        {todos.map(it => (
          <div key={it.id} style={{ padding: 12 }}>
            {it.id} : {it.text}
          </div>
        ))}
      </div>
    );
  }
}

export default TodosHOC({
  options: {
    // pollInterval: 1000,
  },
})(TodoList);
