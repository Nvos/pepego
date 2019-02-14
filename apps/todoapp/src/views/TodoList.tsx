import React from 'react';
import { TodosHOC, TodosQuery, TodosVariables, TodosProps } from '@libs/models';
import { DataProps } from 'react-apollo';

interface Props {}

class TodoList extends React.Component<TodosProps<Props>> {
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
          <div style={{ padding: 12 }}>
            {it.id} : {it.text}
          </div>
        ))}
      </div>
    );
  }
}

export default TodosHOC({
  options: {
    pollInterval: 1000,
  },
})(TodoList);
