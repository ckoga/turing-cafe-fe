import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
  let wrapper;
  let mockResponse = {
    name: 'Roger',
    date: '03/37',
    time: '3:00',
    number: 9
  }
  beforeEach(() => {
    wrapper = shallow(<App />)

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {return Promise.resolve(mockResponse)}
      })
    })
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should update state after component is mounted', () => {
    const mockReservation = {
      name: 'Roger',
      date: '03/37',
      time: '3:00',
      number: 9
    }

    wrapper.instance().componentDidMount();

    expect(wrapper.state('reservations')).toEqual(mockReservation)
  })
})