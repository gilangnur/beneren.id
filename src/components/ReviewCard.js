import React, { Component } from 'react';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

import '../../node_modules/bulma/css/bulma.css';

const StyledRating = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 10px;
    `

class ReviewCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: this.props.object.rating,
            dateCreated: this.props.object.dateCreated,
            title: this.props.object.title,
            content: this.props.object.content,
            stars: []
        }
    }

    showRating = () => {
        let count = this.state.rating;
        if (count === 0) {
            this.setState({
                stars: <h1>Kosong gan</h1>
            })
        }
        while (count > 0) {
            let temp = this.state.stars;
            if (count >= 1)
                temp.push(<FontAwesomeIcon icon={faStar} key={count} style={{color: 'yellow'}}/>);
            else
                temp.push(<FontAwesomeIcon icon={faStarHalf} key={count} style={{color: 'yellow'}}/>);
            this.setState({stars: temp});
            count--;
        }
    }

    //did mount ketika diambil data dari backend
    //did mount itu render dulu sambil nunggu do-while
    //will mount tunggu sampe datanya masuk whilde
    componentDidMount() {
        this.showRating();
    }

    render() {
        return (
            <div className="column is-4">
                <div className="box">
                    <article className="media">
                        <div className="media-content">
                            <StyledRating>
                                {this.state.stars ? this.state.stars : <h1>Loading</h1>}
                            </StyledRating>
                            <p>
                                <span className="has-text-weight-bold">
                                    Reviewed on
                                </span>
                                {this.state.dateCreated}
                            </p>
                            <p className="has-text-info">
                                <span className="has-text-weight-bold">
                                    {this.state.title}
                                </span>
                                <br />
                                {this.state.content}
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        );
    }
}

export default ReviewCard;