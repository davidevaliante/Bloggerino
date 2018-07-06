import React from 'react';
import {connect} from 'react-redux';
import PostCard from './PostCard.js';
import {getFilteredPosts} from './../calls/storeCalls.js';
import Filters from './Filters.js';

const Home = ({postList}) => (<div>
  <h1>Lista posts :</h1>
  <Filters />
  {postList.map((post) => (<PostCard key={post.id} {...post}/>))}
</div>);

const mapStateToProps = (state) => {
  return {postList: getFilteredPosts(state.posts, state.filters)};
}

export default connect(mapStateToProps)(Home)
