import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Car.scss';


class Car extends Component {
    render() {
        return (
            <div className="Car">
                <h2>Car name {this.props.name}</h2>
                <p>Year: {this.props.year}</p>
                {this.props.children}
                <input type="text"
                       className="input"
                       onChange={this.props.onChangeName}
                       value={this.props.name}
                />
                <button onClick={this.props.onDelete}>Delete</button>
            </div>
        );
    }
}

Car.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.number,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func
};

export default Car;