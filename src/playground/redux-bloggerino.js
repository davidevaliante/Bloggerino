import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// ------------------------------------------------------POST REDUCER--------------------
const defaultPostList = [];
const postListReducer = (state = defaultPostList, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [
        ...state,
        action.post
      ];

    case 'EDIT_POST':
      return state.map((post) => {
        if (post.id === action.id) {
          return [
            ...state,
            action.updated_fields
          ]
        } else {
          return post
        }
      });

    case 'REMOVE_POST':
      return state.filter(({id}) => id !== action.id_to_remove);

    default:
      return state;
  }
};
// adds a new post
const addPostAction = ({
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
const removePostById = ({id} : {}) => {
  return ({type: 'REMOVE_POST', id_to_remove: id});
};
// edits the post with the given Id
const editPostWithId = (id, updated_fields) => ({type: 'EDIT_POST', id, updated_fields});

//------------------------------------------------------------FILTER REDUCER-------------
const defaultFilters = {
  text: 'text filter',
  sortBy: 'date',
  startDate: 0,
  endDate: 0
};
const filtersReducer = (state = defaultFilters, action) => {
  switch (action.type) {
    case 'TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'START_DATE_FILTER':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'END_DATE_FILTER':
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state;
  }
};

const setFilterByText = (text = '') => ({type: 'TEXT_FILTER', text: text});

const setStartDate = (startDate = 0) => ({type: 'START_DATE_FILTER', startDate: startDate});

const setEndDate = (endDate = 0) => ({type: 'END_DATE_FILTER', endDate: endDate});

// ----------------------------------------FINAL STORE-----------------------------------
const getVisiblePosts = (postList, {
  text,
  sortBy = 'createdAt',
  startDate,
  endDate
}) => {
  return postList.filter((post) => {
    const startDateMatch = typeof startDate === 'number' && post.createdAt >= startDate;
    const endDateMatch = typeof endDate === 'number' && post.createdAt <= endDate;
    const textMatch = post.content.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch
  }).sort((current, next) => {
    return current.createdAt < next.createdAt
      ? 1
      : -1;
  });
}

const reducers = combineReducers({posts: postListReducer, filters: filtersReducer});
const store = createStore(reducers);

console.log(store.getState());
store.dispatch(addPostAction({content: 'Ciao sono un post'}));
const toBeRemoved = store.dispatch(addPostAction({content: 'Ciao sono un post che va rimosso'}));
console.log(toBeRemoved);
console.log(store.getState());
store.dispatch(addPostAction({content: 'Ciao sono un post con un tag', tag: 'yolo'}));
console.log(store.getState());
store.dispatch(removePostById({id: toBeRemoved.post.id}))
console.log(store.getState());

const demoStore = {

  posts: [
    {
      id: 'asrgsdgsf',
      content: 'some mock content',
      tag: 'some tag',
      createdAt: 0,
      lastEditedAt: 0
    }, {
      id: 'remove_me',
      content: 'some other mock but longer content',
      tag: 'yolo lol meme',
      createdAt: 0,
      lastEditedAt: 0
    }
  ],

  filters: {
    text: 'text filter',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
}

const spread = {
  ...demoStore
};

console.log(spread);
