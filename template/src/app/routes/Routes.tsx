
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HelloWorld from 'app/pages/HelloWorld';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={HelloWorld} />
    </Switch>
  </Router>
);

export default Routes;