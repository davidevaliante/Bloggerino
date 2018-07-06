import {createStore} from 'redux';

const initialState = {
  count: 0,
  pro: 0
};

const store = createStore((state = initialState, action) => {
  switch (action.type) {

    case 'INCREASE_COUNT':
      return {
        count: state.count + 1
      }
    case 'INCREASE_PRO':
      return {
        pro: state.pro + 1
      }
    default:
      return state;
  }
});

//  subscribe
// store.subscribe(() => {
//   console.log(store.getState());
// });

// unsubscribe
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// chiamare unsubscribe() per interrompere

// per operare sull'oggetto
store.dispatch({
  // obbligatoriamente da chiamare type
  type: 'INCREASE_COUNT'
});

store.dispatch({
  // obbligatoriamente da chiamare type
  type: 'INCREASE_COUNT'
});

store.dispatch({
  // obbligatoriamente da chiamare type
  type: 'MULT_COUNT'
});
