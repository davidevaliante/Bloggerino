import React from 'react';
import {connect} from 'react-redux';
import {setFilterByText} from './../actions/filtersReducerActions.js';
import {setDateSordingOrder} from './../actions/filtersReducerActions.js';


const handleSearch  = (event, dispatch) => {
    const text = document.getElementById('searchField').value;
    dispatch(setFilterByText(text))
    console.log(text)
}

const Filters = ({text, dispatch}) => {
  return (
    <div>

      <input id='searchField'
             name='searchField'
             type='text'
             value={text}
             onChange={(e) => {handleSearch(e, dispatch)}}/>

      <select onChange={
        (e)=>{ dispatch(setDateSordingOrder(e.target.value)); }
        }>
        <option value="newest">From newer to oldest</option>
        <option value="oldest">From oldest to newest</option>
      </select>

    </div>
  )
};

const mapStateToProps = (state) => (
  {filters : state.filters}
);

export default connect(mapStateToProps)(Filters);
