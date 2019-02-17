import {
  CreateTagComponent,
  EditTagComponent,
  TagsComponent,
  TagsTags,
} from '@libs/models';
import React, { useState } from 'react';
import { produce } from 'immer';
import { TAGS } from '@libs/api';

interface TagFieldProps extends React.HTMLProps<HTMLInputElement> {
  tag: TagsTags;
}

const TagFieldEdit: React.FunctionComponent<TagFieldProps> = ({
  tag,
}: TagFieldProps) => {
  const [name, setName] = useState(tag.name);
  return (
    <EditTagComponent>
      {(editTag, { data, loading }) => (
        <div style={{ marginBottom: 6 }}>
          <input value={name} onChange={e => setName(e.target.value)} />
          <button
            onClick={e => {
              editTag({
                variables: {
                  name: name,
                  id: tag.id,
                },
              });
            }}
          >
            save
          </button>
        </div>
      )}
    </EditTagComponent>
  );
};

const TagFieldCreate: React.FunctionComponent = () => {
  const [name, setName] = useState('');

  return (
    <CreateTagComponent
      update={(cache, { data: { createTag } }) => {
        const { tags } = cache.readQuery({ query: TAGS });
        cache.writeQuery({
          query: TAGS,
          data: { tags: tags.concat([createTag]) },
        });
      }}
    >
      {(createTag, { data, loading }) => (
        <React.Fragment>
          <input value={name} onChange={e => setName(e.target.value)} />
          <button
            onClick={e => {
              createTag({
                variables: {
                  name: name,
                },
              });
            }}
          >
            save
          </button>
        </React.Fragment>
      )}
    </CreateTagComponent>
  );
};

const TagEditor: React.FunctionComponent = () => {
  return (
    <TagsComponent>
      {({ data, loading, error }) => (
        <div>
          {!loading && !error && (
            <React.Fragment>
              <p>Edit tags</p>
              {data.tags.map(it => (
                <TagFieldEdit key={it.id} tag={it} />
              ))}
            </React.Fragment>
          )}
          <p>Create tag</p>
          <TagFieldCreate />
        </div>
      )}
    </TagsComponent>
  );
};

export default TagEditor;

//
// class TagEdit extends React.Component {
//   emitAdd = () => {
//     console.log(this.state)
//     if (this.state.selectedTag) {
//       if (this.props.tags.findIndex(it => it.id === this.state.selectedTag.id) === -1) {
//         this.props.onChanged([...this.props.tags, this.state.selectedTag]);
//       }
//     }
//   };
//
//   emitRemove = (id: string) => (_: any) => {
//     this.props.onChanged(this.props.tags.filter(it => it.id !== id));
//   };
//
//   onSelectionChanged = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     this.setState({
//       selectedTag: {
//         id: event.target.value,
//         name: event.target.innerText
//       }
//     });
//   };
//
//   render() {
//     return <div>
//       <TagsComponent>
//         {({data, loading, error}) => (<div>
//           {(!loading && !error) && <React.Fragment>
//               <TagSelect selectedTag={data.tags[0]} onChange={this.onSelectionChanged} tags={data.tags}/>
//               <button onClick={this.emitAdd}>Add</button>
//               <div style={{display: 'flex'}}>
//                 {this.props.tags.map(it => <Tag key={it.id}>
//                   {it.name}
//                   <button onClick={this.emitRemove(it.id)}
//                           style={{border: 'none', backgroundColor: 'none'}}>&#10005;</button>
//                 </Tag>)}
//               </div>
//           </React.Fragment>}
//
//         </div>)}
//       </TagsComponent>
//     </div>
//   }
// }
