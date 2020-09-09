import React from 'react'
import { shallow } from 'enzyme'
import App from '../../../client/containers/App'

describe('<App />', () => {
  const wrapper = shallow(<App />)
  it('renders', () => {
    expect(wrapper.find('ThemeProvider').exists()).toBe(true)
  })
})
