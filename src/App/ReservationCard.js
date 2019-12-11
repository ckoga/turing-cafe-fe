import React from 'react';
import './ReservationCard.css';
import PropTypes from 'prop-types';

const ReservationCard = ({ name, date, time, number }) => {
  return (
    <div className='reservation-card'>
      <h2>{name}</h2>
      <ul>
        <li>{date}</li>
        <li>{time}</li>
        <li>Number of Guest {number}</li>
      </ul>
    </div>
  )
}

export default ReservationCard;