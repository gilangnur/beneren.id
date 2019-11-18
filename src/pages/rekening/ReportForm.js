import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import NavBar from '../../components/NavBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUpload, faMoneyCheck, faMoneyBillWave, faSearchDollar } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button';

import '../../../node_modules/bulma/css/bulma.css';

const StyledTitle = styled.p`
        margin: 5vh 0;
    `
const StyledColumn = styled.div`
        margin: 5vh 0;
    `
const StyledSection = styled.div`
        margin: 5vh 0;
    `


class ReportForm extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="container">
                    <StyledTitle className="title is-4 has-text-danger">
                        Laporkan Nomor Rekening Baru
                    </StyledTitle>
                </div>
                <div className="hero is-danger is-medium has-text-centered">
                    <div className="hero-body">
                        <div className="container">
                            <p className="title is-2">
                                Pernah Tertipu Saat Belanja Online?
                            </p>
                            <p className="subtitle is-5">
                                Laporkan aja ke beneran.id dan bantu calon pembeli lainnya menghindari
                                hal yang kamu alami
                            </p>
                        </div>
                    </div>
                </div>
                <StyledColumn className="columns is-centered">
                    <div className="column is-5">
                        <div class="notification is-warning">
                            Untuk mempercepat peninjauan terhadap laporan, kami sarankan agar anda
                            memberikan informasi yang akurat, valid, serta lengkap. Jika laporan yang
                            dikirimkan oleh pelapor sesuai dengan kriteria beneran.id, maka nomer Rekening
                            akan diproses dan di blacklist.
                        </div>
                        <form>
                            <h1 className="title is-2">
                                Isi Identitas Pelapor
                            </h1>
                            <p className="subtitle is-5">
                                isi identitas dibawah ini dengan benar. Kami tidak akan pernah memberikan identitas pelapor
                                kepada siapapun
                            </p>
                            <div className="field">
                                <label className="label">Full Name</label>
                                <div className="control has-icons-left">
                                    <input className="input" type="text" name="fullName" placeholder="your full name" />
                                    <span className="icon is-small is-left">
                                        <FontAwesomeIcon icon={faUser} />
                                    </span>
                                </div>
                            </div>
                            <div className="field">
                                <div className="field">
                                    <label className="label">Your Identity Number</label>
                                    <div className="control has-icons-left">
                                        <input className="input" type="number" name="identityNumber" placeholder="identity number" />
                                        <span className="icon is-small is-left">
                                            <FontAwesomeIcon icon={faUser} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="field">
                                <div className="file has-name">
                                    <label className="file-label">
                                        <input className="file-input" type="file" name="identityPic" />
                                        <span className="file-cta">
                                            <span className="file-icon">
                                                <FontAwesomeIcon icon={faUpload} />
                                            </span>
                                            <span className="file-label">
                                                Choose a file…
                                            </span>
                                        </span>
                                        <span className="file-name">
                                            Upload your identity card ...
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <StyledSection>
                                <h1 className="title is-2">
                                    Isi Identitas Terlapor
                                </h1>
                                <p className="subtitle is-5">
                                    Berikan informasi lengkap terkait pelaku yang menipu anda.
                                    Pastikan informasi yang anda berikan benar dan lengkap.
                                </p>
                                <div className="field">
                                    <label className="label">Full Name</label>
                                    <div className="control has-icons-left">
                                        <input className="input" type="text" name="fullNameTerlapor" placeholder="your full name" />
                                        <span className="icon is-small is-left">
                                            <FontAwesomeIcon icon={faUser} />
                                        </span>
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column">
                                        <div className="field">
                                            <label className="label">Bank Name</label>
                                            <div className="control has-icons-left">
                                                <input className="input" type="text" name="bankName" placeholder="bank name" />
                                                <span className="icon is-small is-left">
                                                    <FontAwesomeIcon icon={faMoneyCheck} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="field">
                                            <label className="label">Bank Account Number</label>
                                            <div className="control has-icons-left">
                                                <input className="input" type="number" name="bankNumber" placeholder="bank account number" />
                                                <span className="icon is-small is-left">
                                                    <FontAwesomeIcon icon={faMoneyCheck} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">
                                        Cronology
                                    </label>
                                    <textarea class="textarea" name="cronology" placeholder="tell us detailed cronology so we could analysis your case"></textarea>
                                </div>
                                <div className="field">
                                    <div className="field">
                                        <label className="label">Material Lost</label>
                                        <div className="control has-icons-left">
                                            <input className="input" type="number" name="materialLost" placeholder="how much your lost" />
                                            <span className="icon is-small is-left">
                                                <FontAwesomeIcon icon={faMoneyBillWave} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="file has-name">
                                        <label className="file-label">
                                            <input className="file-input" type="file" name="evidencePic" />
                                            <span className="file-cta">
                                                <span className="file-icon">
                                                    <FontAwesomeIcon icon={faUpload} />
                                                </span>
                                                <span className="file-label">
                                                    Choose a file…
                                                </span>
                                            </span>
                                            <span className="file-name">
                                                Upload your evidence pic ...
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="field">
                                        <label className="label">Scam Platform</label>
                                        <div className="control has-icons-left">
                                            <input className="input" type="number" name="materialLost" placeholder="where you getting scam" />
                                            <span className="icon is-small is-left">
                                                <FontAwesomeIcon icon={faSearchDollar} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </StyledSection>
                            <Button style="button is-fullwidth is-info" text="Submit Your Report"/>
                        </form>
                    </div>
                </StyledColumn>

            </div>
        );
    }
}

export default ReportForm;