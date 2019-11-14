import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button';

import '../../../node_modules/bulma/css/bulma.css';
import Logo from '../../assets/images/logo.png';
import Illustration from '../../assets/images/undraw_to_do_list_a49b@2x.png';

const StyledWrapper = styled.div`
        padding: 10vh 5vw;
        height: 100vh;
    `
const StyledLogoImage = styled.img`
        width: auto;
        height: 60px;
    `

const StyledColumn = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        height: 80vh;
    `

const StyledForm = styled.form`
        padding-left: 300px;
    `

const StyledIconButton = styled.span `
        cursor: pointer;
        pointer-events: auto !important;
    `

class Register extends Component {
    constructor (props) {
        super(props);
        this.state = {
            userName: '',
            email: '',
            password: '',
            rePassword: '',
            formErrors: {userName: '', email: '', password: '', rePassword: ''},
            userNameValid: false,
            emailValid: false,
            passwordValid: false,
            rePasswordValid: false,
            formValid: false,
            iconType: false,
            type: 'password'
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
        let userNameValid = this.state.userNameValid;
        let rePasswordValid = this.state.rePasswordValid;

        switch(fieldName) {
            case 'userName':
                userNameValid = value.length > 0;
                fieldValidationErrors.userName = emailValid ? '' : 'insert your user name';
                break;
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : 'email does not match with any format';
                break;
            case 'password':
                passwordValid = value.length >= 8;
                fieldValidationErrors.password = passwordValid ? '': 'is too short';
                break;
            case 'rePassword':
                rePasswordValid = value === this.state.password;
                fieldValidationErrors.rePassword = passwordValid ? '': 'do not forget to fill this';
            default:
                break;
        }

        this.setState({ formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid,
                        userNameValid: userNameValid,
                        rePasswordValid: rePasswordValid
                        }, this.validateForm);
    }
    
    errorClass(error) {
        return(error.length === 0 ? '' : 'is-danger');
    }


    
    render(){
        return(
            
            <StyledWrapper className="container">
                <div className="columns is-8 is-vcentered">
                    <StyledColumn className="column is-4">
                        <figure>
                            <img src={Illustration}/>
                        </figure>
                    </StyledColumn>
                    <StyledColumn className="column">
                        <StyledForm>
                        <figure>
                            <StyledLogoImage src={Logo}/>
                        </figure>
                        <div className="content">
                            <h1>
                                Buat akun untuk kontribusi
                                dan informasi
                            </h1>
                        </div>
                            <div className="field">
                                <label className="label">User Name</label>
                                <div className="control has-icons-left">
                                    <input className={`input ${this.errorClass(this.state.formErrors.userName)}`} type="text" name="userName" placeholder="Tell us your name" value={this.state.userName} onChange={this.handleUserInput}/>
                                    <span className="icon is-small is-left">
                                        <FontAwesomeIcon icon={faUser}/>
                                    </span>
                                </div>
                                <p className="help is-danger">{this.state.formErrors.userName}</p>
                            </div>
                            <div className="field">
                                <label className="label">Email Address</label>
                                <div className="control has-icons-left">
                                    <input className={`input ${this.errorClass(this.state.formErrors.email)}`} type="email" name="email" placeholder="Your valid & active email" value={this.state.email} onChange={this.handleUserInput}/>
                                    <span className="icon is-small is-left">
                                        <FontAwesomeIcon icon={faEnvelope}/>
                                    </span>
                                </div>
                                <p className="help is-danger">{this.state.formErrors.email}</p>
                            </div>
                            <div className="field">
                                <label className="label">Password</label>
                                <div className="control has-icons-left has-icons-right">
                                    <input className={`input ${this.errorClass(this.state.formErrors.password)}`} type={this.state.type} name="password" placeholder="Your secure and trusted password"  value={this.state.password} onChange={this.handleUserInput}/>
                                    <span className="icon is-small is-left">
                                        <FontAwesomeIcon icon={faLock}/>
                                    </span>
                                    <StyledIconButton className="icon is-small is-right" onClick={this.showHide}>
                                        <FontAwesomeIcon icon={this.state.iconType ? faEyeSlash : faEye}/>
                                    </StyledIconButton>
                                </div>
                                <p className="help is-danger">{this.state.formErrors.password}</p>
                            </div>
                            <div className="field">
                                <label className="label">Re-type Password</label>
                                <div className="control has-icons-left">
                                    <input className="input" type="password" name="rePassword" placeholder="Type your password again"/>
                                    <span className="icon is-small is-left">
                                        <FontAwesomeIcon icon={faLock}/>
                                    </span>
                                </div>
                                <p className="help is-danger"></p>
                            </div>
                            <div className="field">
                                <Button type="submit" style="button is-info is-normal is-fullwidth" text="REGISTER"/>
                            </div>
                        </StyledForm>
                    </StyledColumn>
                </div>
            </StyledWrapper>
        );
    }
}

export default Register;
