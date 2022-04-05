import React, { useState } from 'react';
import { Redirect } from 'react-router'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Admin from "./components/admin/adminPage/Admin";
import Home from "./components/user/homePage/Home";
import AboutUs from "./components/user/aboutUsPage/AboutUs";
import News from "./components/user/newsPage/News";
import SignUp from "./components/admin/signupPage/SignUp"
import Vertification from "./components/admin/vertificationPage/Vertification";
import Login from "./components/admin/loginPage/Login";
import Forget from "./components/admin/forgetPage/Forget"
import New_detail from './components/user/newsPage/content/new_detail';

import AboutStaff from './components/user/aboutUsPage/AboutStaff';
import AboutFinance from './components/user/aboutUsPage/AboutFinance';
import AboutReport from './components/user/aboutUsPage/AboutReport';
import './scss/main.scss';
import './app.scss';

function App(props) {
  const [token, setToken] = useState(false);
  return (
    <Router>
      <Switch>
        <div className='cls-test'>Test</div>
        <Route path="/" exact={true}><Home /></Route>



        <Route path="/news" exact={true}><News /></Route>

        <Route path="/new_detail/:id" exact={true}><New_detail /></Route>


        <Route path="/signUp" exact={true}><SignUp /></Route>

        <Route path="/vertification" exact={true}><Vertification /></Route>

        <Route path="/login" exact={true}><Login setToken={setToken} token={token} /></Route>

        <Route path="/forget" exact={true}><Forget /></Route>

        <Route path="/admin" exact={true}>
          {localStorage.getItem('token') ? <Admin /> : <Redirect to="/login" />}
        </Route>

        <Route path="/aboutUs" exact={true}><AboutUs /></Route>
        <Route path="/staff" exact={true}><AboutStaff /></Route>
        <Route path="/finance" exact={true}><AboutFinance /></Route>
        <Route path="/report" exact={true}><AboutReport /></Route>




      </Switch>

    </Router>
  );
}


export default App;
