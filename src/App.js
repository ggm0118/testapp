import React, { Component } from 'react';
import './App.css';
//import { render } from '@testing-library/react';
import LoginPage from "./pages/Login";
import MainPage from "./pages/Main";
import SignOutPage from "./pages/SignOut";
import SignUpPage from "./pages/SignUp";


import { Route } from "react-router-dom";

function App(){

    return(
      <div className="App">
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/signUp" component={SignUpPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signOut" component={SignOutPage} />
        <Route exact path="/Main" component={MainPage} />
      </div>
    );
}

export default App;
