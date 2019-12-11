export const getReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
    .then(res => {
      if(!res.ok) {
        throw Error('Error getting reservations')
      }
      return res.json()
    })
}

export const makeReservation = (newReservation) => {
  let options = {
    method: 'POST',
    body: JSON.stringify(newReservation),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return fetch('http://localhost:3001/api/v1/reservations', options)
    .then(res => {
      if(!res.ok) {
        throw Error('There was a problem making your reservation')
      }
      return res.json()
    })
}