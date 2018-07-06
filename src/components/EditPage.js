import React from 'react';

const EditPage = (props) => {
  // visto che si arriva qui da router abbiamo automaticamente della roba in props
  console.log(props);
  return (<div>
    Editing the post with id {props.match.params.id}
  </div>);
};

export default EditPage;
