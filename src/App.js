import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
// importing screens
import Home from "./containers/Home";
import Login from "./containers/Login";
import Users from "./containers/Users";


function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home" render={(props) => <Home {...props} />} />
          <Route exact path="/login" render={(props) => <Login {...props} />} />
          <Route exact path="/users" render={(props) => <Users {...props} />} />

        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
