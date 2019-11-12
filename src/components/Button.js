import React, { Component } from 'react';
import '../../node_modules/bulma/css/bulma.css';

class Button extends Component {
    render(){
        return(
            <button className={this.props.style}>{this.props.text}</button>
        )
    }
}

export default Button;