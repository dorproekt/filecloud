import React from 'react'
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom'
import './app.css'
import 'materialize-css';
import Navbar from './navbar/Navbar'
import { Registration } from './Registration';
import { Login } from './Login';
import {useSelector, useDispatch} from 'react-redux'
import {auth} from '../actions/user'
import Disc from "./disc/Disc";

const App = () => {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()

  React.useEffect(() => {
    window.M.updateTextFields();
  });

  React.useEffect(() => {

    dispatch(auth())

  }, [dispatch]);


  return (
    <BrowserRouter>
      <div className="wrapper">
        <Navbar />
        <div className="row">
          {isAuth ?
            <Switch>
              <Route exact path="/" component={Disc}/>
              <Redirect to="/"/>
            </Switch>
            :
            <Switch>
              <Route path="/registration" component={Registration}/>
              <Route path="/login" component={Login}/>
              <Redirect to='/login'/>
            </Switch>
          }
        </div>
      </div>
    </BrowserRouter>
  );
  
}

export default App;
