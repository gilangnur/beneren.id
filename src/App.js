import React, { Component }  from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbar: true
    }
  }

  render(){
    return(
      <Router>
        <Switch>
          <Route path="/login" component={Login} exact />
        </Switch>
    </Router>
    );
  }
}; 


export default App;
