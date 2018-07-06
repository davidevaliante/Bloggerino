import uuid from 'uuid'

// adds a new post
export const addPost = ({
  // object destructuring
  content,
  tag = '',
  createdAt = 0,
  lastEditedAt = 0
} : {}) => {
  return (
  // actionObject
  {
    type: 'ADD_POST',
    post: {
      id: uuid(),
      content,
      tag,
      createdAt,
      lastEditedAt
    }
  });
};
//removes a post based on a specific ID
export const removePostById = (id) => {
  return ({type: 'REMOVE_POST', id_to_remove: id});
};
// edits the post with the given Id
export const editPostWithId = (id, updated_fields) => ({type: 'EDIT_POST', id, updated_fields});
