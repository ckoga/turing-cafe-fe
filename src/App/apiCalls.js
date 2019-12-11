export const getReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
    .then(res => {
      if(!res.ok) {
        throw Error('Error getting reservations')
      }
      return res.json()
    })
}

export const makeReservation = () => {
  return fetch()
}