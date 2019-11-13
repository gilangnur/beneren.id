import React, { Component } from 'react';
import { Link } from 'react-router-dom';
  
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button';

import '../../../node_modules/bulma/css/bulma.css';
import Logo from '../../assets/images/logo.png';
import Illustration from '../../assets/images/hero@2x.png';

const StyledWrapper = styled.div`
        padding: 10vh 5vw;
        height: 100vh;
    `
const StyledLogoImage = styled.img`
        width: auto;
        height: 60px;
    `
const StyledForm = styled.form`
        margin: 5vh 0;
    `
const StyledColumn = styled.div`
        padding: 8vh 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
    `

const StyledIllustration = styled.img `
        cursor: pointer;
        margin-left: 20vw;
        width: auto;
        height: 320px;
    `

const StyledIconButton = styled.span `
        cursor: pointer;
        pointer-events: auto !important;
    `    

class HomePage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false,
            type: 'password',
            iconType: false
        }
    }

    showHide = (e) => {
        console.log(this.state.iconType);
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            type: this.state.type === 'input' ? 'password' : 'input',
            iconType: this.state.iconType === false ? true : false
        })  
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch(fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : 'email does not match with any format';
                break;
            case 'password':
                passwordValid = value.length >= 8;
                fieldValidationErrors.password = passwordValid ? '': 'is too short';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid
                        }, this.validateForm);
    }
    
    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }

    errorClass(error) {
        return(error.length === 0 ? '' : 'is-danger');
    }

    render(){
        return(
            <StyledWrapper className="container">
                <div className="columns is-vcentered is-8">
                    <StyledColumn className="column is-4">
                        <figure>
                            <StyledLogoImage src={Logo}/>
                        </figure>
                        <div className="content">
                            <h1 className="is-large">
                                Bantu Komunitas Mencegah Penipuan
                            </h1>
                        </div>
                        <StyledForm>
                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control has-icons-left">
                                    <input className={`input ${this.errorClass(this.state.formErrors.email)}`} type="email" name="email" placeholder="Your beloved email addres" value={this.state.email} onChange={this.handleUserInput}/>
                                    <span className="icon is-small is-left">
                                        <FontAwesomeIcon icon={faUser}/>
                                    </span>
                                </div>
                                <p className="help is-danger">{this.state.formErrors.email}</p>
                            </div>
                            <div className="field">
                                <label className="label">Password</label>
                                <div className="control has-icons-left has-icons-right">
                                    <input className={`input ${this.errorClass(this.state.formErrors.password)}`} type={this.state.type} name="password" placeholder="Secretly password" value={this.state.password} onChange={this.handleUserInput}/>
                                    <span className="icon is-small is-left">
                                        <FontAwesomeIcon icon={faLock}/>
                                    </span>
                                    <StyledIconButton className="icon is-small is-right" onClick={this.showHide}>
                                        <FontAwesomeIcon icon={this.state.iconType ? faEyeSlash : faEye}/>
                                    </StyledIconButton>
                                </div>
                                <p id="email-message" className="help is-danger">{this.state.formErrors.password}</p>
                            </div>
                            <div className="field">
                                <Button type="submit" style="button is-primary is-normal is-fullwidth" disabled={!this.state.formValid} text="LOGIN"/>
                            </div>
                            <div className="columns is-1">
                                <div className="column">
                                    <Link to="/forgotpassword">Forgot Password?</Link>
                                </div>
                                <div className="column">
                                    Create account?<Link to="/register">Register</Link>
                                </div>
                        </div>
                        </StyledForm>
                        
                    </StyledColumn>
                    <div className="column">
                        <figure>
                            <StyledIllustration src={Illustration} onClick={this.showHide}/>
                        </figure>
                    </div>
                </div>
            </StyledWrapper>
        );
    }
}

export default HomePage;