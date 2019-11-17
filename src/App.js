import React, { Component }  from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './pages/authpages/Login';
import Register from './pages/authpages/Register';
import ForgotPassword from './pages/authpages/ForgotPassword';

import Home from './pages/mainpage/Home';
import CekRekening from './pages/rekening/CekRekening';

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
          <Route path="/register" component={Register} exact />   
          <Route path="/forgotpassword" component={ForgotPassword} exact/>   
        </Switch>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/cekrekening" component={CekRekening} exact />
        </Switch>
    </Router>
    );
  }
}; 


export default App;
