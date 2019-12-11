import React from 'react';
import DisplayContainer from './DisplayContainer';
import { shallow } from 'enzyme';

describe('DisplayContainer', () => {
  let wrapper, mockState;
  beforeEach(() => {
    mockState = {
      reservations: [
        {
          name: 'Thao',
          date: '02/09',
          time: '10:16',
          number: 2
        }
      ]
    }
    wrapper = shallow(<DisplayContainer data={mockState.reservations}/> )
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  
})