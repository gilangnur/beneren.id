import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button';

import '../../../node_modules/bulma/css/bulma.css';
import Logo from '../../assets/images/logo.png';

const StyledWrapper = styled.div`
        padding: 10vh 5vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `
const StyledLogoImage = styled.img`
    width: auto;
    height: 50px;
`

class ForgotPassword extends Component {
    render(){
        return(
            <StyledWrapper class="container">
                <figure>
                    <StyledLogoImage src={Logo}/>
                </figure>
                <div className="content">
                    <h1 className="is-large">
                        Pulihkan kembali akunmu, yang dilupain
                        kenangan mantan aja ya.
                    </h1>
                </div>
                <form>
                    <div className="field">
                        <label className="label">Back Up Email</label>
                        <div className="control has-icons-left">
                            <input className="input" type="email" name="backUpEmail" placeholder="Type your email to get yout account back"/>
                            <span className="icon is-small is-left">
                                <FontAwesomeIcon icon={faEnvelope}/>
                            </span>
                        </div>
                    </div>
                    <Button type="submit" style="button is-info is-normal is-fullwidth" text="RESET ACCOUNT"/> 
                </form>
            </StyledWrapper>
        );
    }
}

export default ForgotPassword;