import React from 'react';
import {connect} from 'react-redux';
import {addPost} from './../actions/postActions.js';

const inputTitleStyle = {'width' : '30%', 'resize':'none'};

const handleNewPost = (event, dispatch, previousPage) => {
  const content = document.getElementById('content').value;
  const title = document.getElementById('title').value;
  const time = Date.now();
  dispatch(addPost({title:title,content:content, createdAt:time}));
  previousPage()
}

const AddPage = (props) => {
    // visto che si arriva qui da router abbiamo automaticamente della roba in props
    const {dispatch, history } = props

    return(
      <div>
        <h1>Add a New post</h1>
        <div>
          <input id='title' type='text' placeholder='Title' style={inputTitleStyle}></input>
        </div>
        <div style={{marginTop:'0.5%'}}>
          <textarea id='content' type='text' rows='14' placeholder='Insert new content' style={inputTitleStyle}>

          </textarea>
        </div>
        <button onClick={(e) => handleNewPost(e,dispatch, history.goBack) }>Submit</button>
        <button>Edit</button>
      </div>
    );
};

const mapStateToProps = (state) => (
   {posts : state.posts, dipatch : state.dispatch}
);

export default connect(mapStateToProps)(AddPage);
