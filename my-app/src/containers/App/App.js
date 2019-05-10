import React, { Component } from 'react';
import Car from './../../components/Car/Car';
import ErrorBoundary from './../../components/ErrorBoundary/ErrorBoundary';
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cars: [
                {name: 'Audi', year: 2016},
                {name: 'Ford', year: 2018},
                {name: 'Mazda', year: 2013}
            ],
            pageTitle: 'React components',
            showCars: false
        };
    }

// App handlers
    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        });
    };
// Car component functions
    onChangeName = (inputValue, index) => {
        const car = this.state.cars[index];
        const cars = [...this.state.cars];

        car.name = inputValue;
        cars[index] = car;

        this.setState({cars});
    };

    deleteItem(index) {
        const cars = this.state.cars.concat();

        cars.splice(index, 1);
        this.setState({cars});
    };

// render App
  render() {
    return (
      <div className="App">
        <h1>{this.state.pageTitle}</h1>
        <button onClick={this.toggleCarsHandler}>Toggle cars</button>
          {this.state.showCars ?
              this.state.cars.map((car, index) => {
                  return (
                      <ErrorBoundary key={index}>
                          <Car
                              name={car.name}
                              year={car.year}
                              onChangeName = {event => {this.onChangeName(event.target.value, index)}}
                              onDelete={this.deleteItem.bind(this, index)}
                          />
                      </ErrorBoundary>
                  );
              })
              : null
          }
      </div>
    );
  }
}

export default App;
