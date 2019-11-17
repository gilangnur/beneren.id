import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import Navbar from '../../components/NavBar';
import Button from '../../components/Button';
import ReviewCard from '../../components/ReviewCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTag } from '@fortawesome/free-solid-svg-icons';

import '../../../node_modules/bulma/css/bulma.css';

const StyledContainer = styled.div`
        width: 100vw;
        background-color: #EFF5F7;
        padding: 10vh 5vw;
    `

const review = [
    {
        rating: 1.5,
        dateCreated: "16 August 2019",
        title: "Penipuan Furniture Jepara",
        content: "Penipuan melalui facebook, bilangnya gratis ongkir tapi nyatanya?:"
    }
]

class CekRekening extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataPelaporan: [
                {
                    position: 1,
                    nomerRekening: 17515020111079,
                    jumlahLaporan: 7
                }
            ]
        }
    }

    showCard = () => {
        for (let i = 0; i < review.length; i++) {
            return <ReviewCard object={review[i]} />;
        }
    }

    showReportPosition = () => {
        for (let i = 0; i < this.state.dataPelaporan.length; i++) {
            return <DisplayTopReport data={this.state.dataPelaporan[i]}/>;
        }
    }


    render() {
        return (
            <div>
                <Navbar />
                <div className="hero is-medium is-dark has-text-centered has-text-white">
                    <div className="hero-body container">
                        <h1 className="title is-1">
                            Cek Rekening Penipu Online
                        </h1>
                        <p className="subtitle is-5">
                            Identifikasi apakah transaksi yang akan dilakukan memiliki resiko
                            <br />
                            untuk melakukan penipuan atau tidak. Guanakan nomor rekeningnya ya.
                        </p>
                        <form>
                            <div className="field is-grouped">
                                <p className="control has-icons-left is-expanded">
                                    <input className="input is-medium" type="text" name="cekRekening" placeholder="Gunakan nomor rekening" />
                                    <span className="icon is-medium is-left">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </span>
                                </p>
                                <p className="control">
                                    <Button type="submit" style="button is-light is-medium" text="check" />
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="hero is-medium has-text-info">
                    <div className="hero-body ">
                        <div className="container">
                            <div className="columns is-8 has-text-centered">
                                <div className="column ">
                                    <h1 className="title is-2">
                                        49369+
                                    </h1>
                                    <h3 className="subtitle is-5">
                                        Kasus penipuan yang telah
                                        <br />
                                        dilaporkan pengguna
                                    </h3>
                                </div>
                                <div className="column ">
                                    <h1 className="title is-2">
                                        29246+
                                    </h1>
                                    <h3 className="subtitle is-5">
                                        Rekening telah diblacklist
                                        <br />
                                        oleh komunitas
                                    </h3>
                                </div>
                                <div className="column ">
                                    <h1 className="title is-2">
                                        Rp. 3M +
                                    </h1>
                                    <h3 className="subtitle is-5">
                                        Uang telah diselamatkan dari penipuan
                                        <br />
                                        sejak 1 Januari 2018
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <StyledContainer>
                    <div className="hero">
                        <div className="hero-body">
                            <h1 className="title is-4">
                                Review Nomer Rekening Baru
                            </h1>
                            <div className="columns">
                                {this.showCard()}
                            </div>
                        </div>
                    </div>
                    <div className="hero">
                        <div className="hero-body">
                            <h1 className="title is-2 has-text-centered" style={{color: "#003459"}}>
                                Rekening Paling Banyak
                                <br/>
                                Dilaporkan Melakukan Penipuan
                            </h1>
                            <div className="content has-text-centered">
                                <p className="subtitle is-5">
                                    Daftar nomor rekening yang paling banyak dilaporkan
                                    <br/>
                                    melakukan penipuan dalam seminggu terakhir
                                </p>
                            </div>
                            <div className="columns">
                                {this.showReportPosition()}
                            </div>
                        </div>
                    </div>
                </StyledContainer>
            </div>
        );
    }
}

class DisplayTopReport extends Component {
    render(){
        return(
            <div className="column is-4">
                <div className="box">
                    <article className="media">
                        <div className="media-left">
                            <span className="tag is-danger is-large">
                                {this.props.data.position}
                            </span>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <p className="title is-4">
                                    <strong>{this.props.data.nomerRekening}</strong>
                                </p>
                                <strong className="has-text-danger">
                                    <FontAwesomeIcon icon={faTag}/>
                                    Dilaporkan sebanyak {this.props.data.jumlahLaporan} dalam seminggu
                                </strong>
                            </div>
                            <div className="level">
                                <Button style="button is-warning is-small" text="Lihat Rekam Jejak"/>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        );
    }
}

export default CekRekening;