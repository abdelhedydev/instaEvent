/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {
  Calendar, Events,
} from './Components';


// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) => (localStorage.getItem('isAuth') ? (
//       <Component {...props} />
//     ) : (
//       <Redirect
//         to={{
//           pathname: '/',
//           state: { from: props.location },
//         }}
//       />
//     ))}
//   />
// );

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/evenements" component={Events} />
          <Route path="/" component={Calendar} />
          {/* <Route path="/">
            <Login />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}
