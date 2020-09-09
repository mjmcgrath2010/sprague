import React from 'react'
import { shallow } from 'enzyme'
import Login from '../../../../client/containers/Login'

describe('<Login />', () => {
  const wrapper = shallow(<Login />)
  it('renders', () => {
    expect(wrapper.find('Container').exists()).toBe(true)
  })
})
