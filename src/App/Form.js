import React, { Component } from 'react';
import './Form.css';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: 0,
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render () {
    return (
      <form className='form'>
        <input name='name' placeholder='Name' type='text' value={this.state.name} id='name-input' onChange={(event) => this.handleChange(event)}/>
        <input name='date' placeholder='Date (mm/dd)' type='text' value={this.state.date} id='date-input' onChange={(event) => this.handleChange(event)}/>
        <input name='time' placeholder='Time' type='text' value={this.state.time} id='time-input' onChange={(event) => this.handleChange(event)}/>
        <input name='number' placeholder='Number of Guests' type='number' value={this.state.number} id='number-input' onChange={(event) => this.handleChange(event)}/>
        <button type='button'>Make Reservation</button>
      </form>
    )
  }
}

export default Form;

