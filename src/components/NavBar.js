import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';

import '../../node_modules/bulma/css/bulma.css';
import Logo from '../assets/images/logo.png';

class Navbar extends Component {
    render(){
        return(
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="container">
                    <div className="navbar-brand">
                        <div className="navbar-item">
                            <Link to="/">
                                <img src={Logo}/>
                            </Link>
                        </div>
                    </div>
                    <div className="navbar-menu">
                        <div className="navbar-end">
                            <Link to="/laporkan" className="navbar-item">
                                Laporkan Penipuan
                            </Link>
                            <Link to="/laporkan" className="navbar-item">
                                Cek Rekening
                            </Link>
                            <div className="navbar-item">
                                <Link to="/login">
                                    <Button style="button is-info" text="LOGIN"/>
                                </Link>
                            </div>
                            <div className="navbar-item">
                                <Link to="/register">
                                    <Button style="button is-light" text="REGISTER"/>
                                </Link>    
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;