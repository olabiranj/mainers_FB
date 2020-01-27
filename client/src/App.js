import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Index from "./container/index";
import Profile from "./container/profile";
import Signup from "./container/signup";
import FogortPassword from "./container/fogortPassword";
import Dashboard from "./container/dashboard";
import Post from "./container/post";
import Friends from "./container/friends";
import Message from "./container/message";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Index/>
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/fogortpassword">
          <FogortPassword />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/messages">
          <Message />
        </Route>
        <Route path="/dashboard" >
          <Dashboard />
        </Route>
        <Route path="/post" >
          <Post />
        </Route>
        <Route path="/friends" >
          <Friends />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
