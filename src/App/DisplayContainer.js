import React from 'react';
import './DisplayContainer.css';
import ReservationCard from './ReservationCard';
import PropTypes from 'prop-types';

const DisplayContainer = ({ data }) => {
  const card = data.map(res => {
    return <ReservationCard 
            key={res.id}
            name={res.name}
            date={res.date}
            time={res.time}
            numberGuests={res.number}
    />
  })

  return (
    <main className='res-display'>
      {card}
    </main>
  )
}

export default DisplayContainer;

DisplayContainer.propTypes = {
  data: PropTypes.array
}