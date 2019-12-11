import React from 'react';
import Form from './Form';
import { shallow } from 'enzyme';

describe('Form', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Form />)
  })

  it('should invoke handleClick when button is clicked', () => {
    let mockState = {
          name: 'Thao',
          date: '02/09',
          time: '10:16',
          number: 2
        }

    wrapper.setState(mockState);
    expect(wrapper.state()).toEqual(mockState);
    wrapper.instance().handleClick = jest.fn();
    wrapper.find('button').simulate('click')

    expect(wrapper.instance().handleClick).toHaveBeenCalled();
  })
})