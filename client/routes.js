import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './containers/Home';
import Test from './containers/Test';

export default class Router extends React.Component {
  render() {
    return(
      <div>
        <Switch>
          <Route path="/test" component={Test} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}