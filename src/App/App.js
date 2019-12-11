import React, { Component } from 'react';
import './App.css';
import { getReservations } from './apiCalls';
import DisplayContainer from './DisplayContainer';
import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reservations: [],

    }
  }

  componentDidMount = () => {
    getReservations()
      .then(data => this.setState({ reservations: data }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form />
        </div>
        <div className='resy-container'>
          <DisplayContainer data={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
