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
    pageTitle: 'React components',
    showCars: false
  };

  changeTitleHandler = (newTitle) => {
    this.setState({
        pageTitle: newTitle
    });
  };

    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        });
    };

  render() {

    return (
      <div className="App">
        <h1>{this.state.pageTitle}</h1>
        <button onClick={this.toggleCarsHandler}>Toggle cars</button>
          {this.state.showCars ?
              this.state.cars.map((car, index) => {
                  return (
                      <Car
                          key={index}
                          name={car.name}
                          year={car.year}
                          onChangeTitle={this.changeTitleHandler.bind(this, car.name)}
                      />
                  );
              })
              : null
          }
      </div>
    );
  }
}

export default App;
