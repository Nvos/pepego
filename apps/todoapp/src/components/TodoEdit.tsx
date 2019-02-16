import {EditTodoComponent, EditTodoMutation, EditTodoVariables, TodosTodos} from '@libs/models';
import React, {useState} from 'react';
import TagField from "src/components/TagField";
import {MutationChildProps} from "src/types";

const EditTodo = (props: OuterProps) => (
  <EditTodoComponent>
    {(editTodo, {...data}) => (
      <EditTodosInner mutate={editTodo} {...data} todo={props.todo} userId={props.userId}/>
    )}
  </EditTodoComponent>
)

interface OuterProps {
  todo?: TodosTodos,
  userId?: string
}

interface Props extends MutationChildProps<EditTodoMutation, EditTodoVariables>, OuterProps {
}

const EditTodosInner = ((props: Props) => {
  if (!props.todo || !props.userId) {
    return <p>No todo selected</p>
  }

  const [done, setDone] = useState(props.todo.done);
  const [text, setText] = useState(props.todo.text);
  const [tags, setTags] = useState(props.todo.tags);

  return <div>
    <h3>Selected {props.todo.text}</h3>
    <div>
      <label>
        Text
        <input value={text} type={'text'} onChange={e => setText(e.target.value)}/>
      </label>
      <label>
        Done
        <input checked={done} type={'checkbox'} onChange={e => setDone(!done)}/>
      </label>
      Tags
      <TagField tags={tags} onChanged={setTags}/>
    </div>
    <button
      onClick={e => {
        e.preventDefault();
        props.mutate({
          variables: {
            id: props.todo.id,
            done,
            text,
            lastEditedByID: props.userId,
            tags: tags.map(it => it.id)
          }
        })
      }
      }
    >
      Save
    </button>
  </div>
})


export default EditTodo;