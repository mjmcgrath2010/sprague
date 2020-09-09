import React from 'react'
import { shallow } from 'enzyme'
import Home from '../../../../client/containers/Home'

describe('<Home />', () => {
  const wrapper = shallow(<Home />)
  it('renders', () => {
    expect(wrapper.find('Container').exists()).toBe(true)
  })
})
