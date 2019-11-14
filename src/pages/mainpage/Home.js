import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import Navbar from '../../components/NavBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button';

import '../../../node_modules/bulma/css/bulma.css';
import Illustration from '../../assets/images/hero@2x.png';

const StyledIllustration = styled.img`
        height: auto;
        width: 400px;
    `
const StyledLeftLayOut = styled.div `
        display: flex;
        justify-content: flex-end;
        flex-direction: row;
    `

const StyledRightLayOut = styled.div `
        padding: 0 5vw;
    `

class Home extends Component {
    render() {
        return(
            <div>
                <Navbar/>
                <div className="hero is-fullheight">
                    <div className="hero-body">
                        <div className="columns is-vcentered is-8">
                            <StyledLeftLayOut className="column">
                                <figure>
                                    <StyledIllustration src={Illustration}/>
                                </figure>
                            </StyledLeftLayOut>
                            <StyledRightLayOut className="column">
                                <h1 className="title is-1">
                                    Cek Resiko 
                                    <br/>
                                    Transaksi Online
                                </h1>
                                <h2 className="subtitle is-5">
                                    Identifikasi resiko dari transaksi yang akan anda 
                                    lakukan. Kami akan memberikan informasi 
                                    berdasarkan data yang kami peroleh dari komunitas
                                </h2>
                                <form>
                                    <div className="field is-grouped">
                                        <p className="control has-icons-left is-expanded">
                                            <input className="input is-medium" type="text" name="cekRekening" placeholder="Gunakan nomor rekening"/>
                                            <span className="icon is-medium is-left">
                                                <FontAwesomeIcon icon={faSearch}/>
                                            </span>
                                        </p>
                                        <p className="control">
                                            <Button type="submit" style="button is-light is-medium" text="CHECK" />
                                        </p>
                                    </div>
                                </form>
                            </StyledRightLayOut>
                        </div>
                    </div>
                </div>
                <div className="hero is-medium is-info">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns is-8 has-text-centered  has-text-white">
                                <div className="column ">
                                    <h1 className="title is-2">
                                        49369+
                                    </h1>
                                    <h3 className="subtitle is-5">
                                        Kasus penipuan yang telah 
                                        <br/>
                                        dilaporkan pengguna
                                    </h3>
                                </div>
                                <div className="column ">
                                    <h1 className="title is-2">
                                        29246+
                                    </h1>
                                    <h3 className="subtitle is-5">
                                        Rekening telah diblacklist 
                                        <br/>
                                        oleh komunitas
                                    </h3>
                                </div>
                                <div className="column ">
                                    <h1 className="title is-2">
                                        Rp. 3M +
                                    </h1>
                                    <h3 className="subtitle is-5">
                                        Uang telah diselamatkan dari penipuan 
                                        <br/>
                                        sejak 1 Januari 2018
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero is-medium">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns is-8 is-centered">
                                <div className="column is-4">
                                    <h1 className="title is-3">
                                        Saya ingin cek rekening penjual
                                    </h1>
                                    <p className="subtitle is-6">
                                        Saya ingin melakukan transaksi online, tapi ada resiko
                                        saya akan mengalami penipuan. Apakah transaksi yang
                                        saya lakukan aman.
                                    </p>
                                    <Link to="/cekrekening">
                                        <Button style="button is-info" text="CEK RESIKO"/>
                                    </Link>
                                </div>
                                <div className="column is-4">
                                    <h1 className="title is-3">
                                        Saya ingin melaporkan penipuan
                                    </h1>
                                    <p className="subtitle is-6">
                                        Saya telah tertipu saat melakukan transaksi online. Sepertinya
                                        hal ini akan terulang lagi. Saya ingin berbagi pengalaman
                                        agar tak terulang hal yang sama
                                    </p>
                                    <Link to="/laporkan">
                                        <Button style="button is-info" text="LAPORKAN PENIPUAN"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home; 