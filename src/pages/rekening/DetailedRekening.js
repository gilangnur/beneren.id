import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button';
import Navbar from '../../components/NavBar';

import '../../../node_modules/bulma/css/bulma.css';
import Secure from '../../assets/images/secure.svg';
import BlackList from '../../assets/images/black-list.svg';

const StyledArticle = styled.article`
        display: flex;
        flex-direction: column;
    `
const StyledBackGround = styled.div`
        background-color: #EFF5F7;
        height: 100vh;
    `    
const StyledContent = styled.div`
        padding: 5vh 15vh;
    `
const StyledMediaContent = styled.div`
        padding-left: 5vh;
    `

class DetailedRekening extends Component {
    render() {
        return(
            <StyledBackGround>
                <Navbar/>
                <StyledContent className="container">
                    <div className="columns">
                        <div className="column is-3">
                            <div className="box">
                                <StyledArticle className="media">
                                    <Link to="" style={{width: "100%"}}>
                                        <Button style="button is-info is-fullwidth" text="Profil"/>
                                    </Link>
                                    <Link to="" style={{width: "100%", margin: "1vh 0"}}>
                                        <Button style="button is-fullwidth" text="Laporkan"/>
                                    </Link>
                                    <Link to="" style={{width: "100%"}}>
                                        <Button style="button is-fullwidth" text="Review"/>
                                    </Link>
                                </StyledArticle>
                            </div>
                        </div>
                        <div className="column">
                            <div className="box">
                                <StyledArticle className="media">
                                    <p className="title is-4" style={{width: "100%"}}>
                                        <span style={{marginRight: "1vw"}}>
                                            <FontAwesomeIcon className="has-text-info" icon={faCreditCard} style={{fontSize: "2rem"}}/>
                                        </span>
                                            07845678
                                        <Link to="" style={{float: "right"}}>
                                            <Button style="button is-info" text="Lihat Review"/>
                                        </Link>
                                    </p>
                                </StyledArticle>
                            </div>
                            <div className="box" style={{padding: "5vh 5vh"}}>
                                <article className="media">
                                    <div className="media-left">
                                        <figure class="image is-128x128">
                                            <img class="is-rounded" src={BlackList}/>
                                        </figure>
                                    </div>
                                    <StyledMediaContent className="media-content">
                                        <p className="title is-1">
                                            07845678
                                        </p>
                                        <p className="subtitle is-5">
                                            RAMA INDRA SETIAWAN MATO
                                            <span className="has-text-success">
                                                <span style={{marginLeft: "2vh", marginRight: "1vh"}}>
                                                    <FontAwesomeIcon icon={faPiggyBank}/>
                                                </span>
                                                BANK BCA
                                            </span>
                                        </p>
                                        <span className="title has-text-danger is-4">
                                            19 Orang Telah Melaporkan
                                        </span>
                                    </StyledMediaContent>
                                    <Link to="">
                                        <Button style="button is-danger" text="Laporkan"/>
                                    </Link>
                                </article>
                            </div>
                            <div className="box">
                                <div className="media-content">
                                    <div className="columns">
                                        <div className="column">
                                            <p className="title is-4 has-text-grey">
                                                Beneran Rating
                                            </p>
                                            <p className="subtitle has-text-centered is-2">
                                                BlackList
                                            </p>
                                        </div>
                                        <div className="column">
                                            <p className="title is-4 has-text-grey">
                                                Nilai Beneran
                                            </p>
                                            <p className="subtitle has-text-centered is-2 has-text-danger">
                                                -19
                                            </p>
                                        </div>
                                        <div className="column">
                                            <p className="title is-4 has-text-grey">
                                                Banyak Laporan
                                            </p>
                                            <p className="subtitle has-text-centered is-2">
                                                19
                                            </p>
                                        </div>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </StyledContent>        
            </StyledBackGround>
        );
    }
}

export default DetailedRekening;