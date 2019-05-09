import React, { Component } from 'react';
import './Car.css';

class Car extends Component {
    render() {
        return (
            <div className="Car">
                <h2>Car name {this.props.name}</h2>
                <p>Year: {this.props.year}</p>
                {this.props.children}
                <button onClick={this.props.onChangeTitle}>Click</button>
            </div>
        );
    }
}

export default Car;