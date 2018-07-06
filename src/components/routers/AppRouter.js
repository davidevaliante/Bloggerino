// ---------------------------------DEPENDENCIES
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// ---------------------------------COMPONENTS
import AddPage from '../AddPage';
import EditPage from '../EditPage';
import Home from '../Home';
import Login from '../Login';
import NotFound from '../NotFound';
import Header from '../Header';

const AppRouter = () => {
  return (<div>
    <BrowserRouter>
      <div>
        <Header/>
        <Switch>
          <Route path='/' component={Home} exact={true}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/add' component={AddPage}></Route>
          <Route path='/edit/:id' component={EditPage}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  </div>);
};

export default AppRouter;
