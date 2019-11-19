import React, { Component }  from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './pages/authpages/Login';
import Register from './pages/authpages/Register';
import ForgotPassword from './pages/authpages/ForgotPassword';

import Home from './pages/mainpage/Home';
import CekRekening from './pages/rekening/CekRekening';
import ReportForm from './pages/rekening/ReportForm'
import DetailedRekening from './pages/rekening/DetailedRekening';

class App extends Component {
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
          <Route path="/laporkan" component={ReportForm} exact />
          <Route path="/detailedRekening" component={DetailedRekening} exact/>
        </Switch>
    </Router>
    );
  }
}; 


export default App;
