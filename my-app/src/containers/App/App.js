import React, { Component } from 'react';
import Car from './../../components/Car/Car';
import './App.css';

class App extends Component {
  state = {
    cars: [
      {name: 'Audi', year: 2016},
      {name: 'Ford', year: 2018},
      {name: 'Mazda', year: 2013}
    ],
    pageTitle: 'React components'
  };

  changeTitleHandler = () => {
    console.log('Clicked!');
  };

  render() {
    const divStyle = {
      textAlign: 'center',
      border: '1px solid #eee'
    };

    const cars = this.state.cars;
    return (
      <div className="App" style={divStyle}>
        <h1>{this.state.pageTitle}</h1>
        <button onClick={this.changeTitleHandler}>Change title</button>

        <Car name={cars[0].name} year={cars[0].year}/>
        <Car name={cars[1].name} year={cars[1].year}/>
        <Car name={cars[2].name} year={cars[2].year}/>
      </div>
    );
  }
}

export default App;
