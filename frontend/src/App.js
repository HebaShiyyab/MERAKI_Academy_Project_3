import React ,{useState} from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import { Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import NewArticle from './components/NewArticle';
import Dashboard from './components/Dashboard';


import "./App.css";
// jsx
const App = () => {
  const [token, setToken] = useState();
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className='App'>
      <Navigation  />
      <h1>Register</h1>
      <Route exact  path="/register" component={Register} />
      <Route exact  path="/login" render={() => <Login loginFun={setToken} token = {token} />}/>
      <Route exact  path="/NewArticle" component={NewArticle} />
      <Route exact  path="/Dashboard" component={Dashboard} />
      <Route exact  path="*" component={() => "404 NOT FOUND"} />

      {/* <Register/> */}
      {/* <Login/> */}
    </div>
  );
};

export default  App;
