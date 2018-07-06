import {createStore, combineReducers} from 'redux';
import postListReducer from './../reducers/postListReducer.js';
import filtersReducer from './../reducers/filtersReducer.js';

const reducers = combineReducers({posts: postListReducer, filters: filtersReducer});
const store = () => {
  const store = createStore(reducers);
  return store;
}

export default store;

// const demo_globalState = {
//   posts : [{},{},{}],
//   filters : {
//     text: '',
//     sortBy: 'createdAt',
//     startDate: 0,
//     endDate: 0,
//     ordering : 'newest'
//   }
// }
