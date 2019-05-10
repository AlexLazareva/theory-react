import React, { Component } from 'react';
import Layout from './../../components/hoc/Layout/Layout'
// import ErrorBoundary from './../../components/ErrorBoundary/ErrorBoundary';
import './App.scss';

class App extends Component {
    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         cars: [
    //             {name: 'Audi', year: 2016},
    //             {name: 'Ford', year: 2018},
    //             {name: 'Mazda', year: 2013}
    //         ],
    //         pageTitle: 'React components',
    //         showCars: false
    //     };
    // }


// render App
  render() {
    return (
      <div className="App">
          <Layout>
              <h1>Layout</h1>
          </Layout>
      </div>
    );
  }
}

export default App;
