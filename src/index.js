import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './components/routers/AppRouter'
import registerServiceWorker from './registerServiceWorker';

//store related
import store from './store/store.js';
import {addPost} from './actions/postActions.js';
import {setStartDate, setEndDate} from './actions/filtersReducerActions.js';
import {getFilteredPosts} from './calls/storeCalls.js';

// react-redux
import {Provider} from 'react-redux';

//stylre related
import './styles/style.scss'

const appStore = store();
const state = () => {
  console.log(appStore.getState());
}
appStore.dispatch(addPost({content: 'Added from my app at 100!', createdAt: 100, tag: 'yolo'}));
appStore.dispatch(addPost({content: 'Some mock content create at 200', createdAt: 200,tag:'yolo'}));
appStore.dispatch(addPost({content: 'Lorem ipsum stuff !', createdAt: 900, tag: 'yolo'}));
appStore.dispatch(addPost({content: 'CR7 alla juve ???? LOL !', createdAt: 700, tag: 'yolo'}));
appStore.dispatch(addPost({content: 'Added from my app at 100!', createdAt: 5000, tag: 'yolo'}));
appStore.dispatch(addPost({content: 'Some mock content create at 200', createdAt: 20, tag:'yolo'}));
appStore.dispatch(addPost({content: 'Lorem ipsum stuff !', createdAt: 150, tag: 'yolo'}));
appStore.dispatch(addPost({content: 'CR7 alla juve ???? LOL !', createdAt: 3000, tag: 'yolo'}));
appStore.dispatch(setStartDate(0))


// setTimeout(() => {
//   appStore.dispatch(addPost({content: 'Content generated after 5 seconds', createdAt: 500, tag: 'yolo'}));
//   appStore.dispatch(setFilterByText('Lorem'));
// }, 3000);

const jsx = (<Provider store={appStore}>
  <AppRouter/>
</Provider>);

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
