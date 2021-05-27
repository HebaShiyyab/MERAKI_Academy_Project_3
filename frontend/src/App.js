import React from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import { Route } from "react-router-dom";
import Navigation from "./components/Navigation"
import NewArticle from './components/NewArticle'
import "./App.css";
// jsx
const App = () => {
  return (
    <div className='App'>
      <Navigation />
      <h1>Register</h1>
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/NewArticle" component={NewArticle} />

      {/* <Register/> */}
      {/* <Login/> */}
    </div>
  );
};

export default App;
