import React from 'react';
import {connect} from 'react-redux';
import {removePostById} from './../actions/postActions.js';



const PostCard = ({id, content, createdAt, tag, dispatch}) => (
  <div>
    <h3>{content}</h3>
    <p>Created : {createdAt} Tags : {tag}</p>
    <button onClick={()=> {
                            console.log('clicked');
                            dispatch(removePostById(id))
                          }}
    >Remove Post
    </button>
    <hr></hr>
  </div>
);

export default connect()(PostCard);
