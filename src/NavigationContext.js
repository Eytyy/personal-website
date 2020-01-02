import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const NavigationContext = React.createContext()
NavigationContext.displayName = 'NavigationContext'

export const NavigationProvider = ({ children }) => {
  const [active, setActive] = useState('work')
  return (
    <NavigationContext.Provider value={{ active, setActive }}>
      {children}
    </NavigationContext.Provider>
  )
}

NavigationProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export const NavigationConsumer = ({ render }) => {
  return (
    <NavigationContext.Consumer>
      {context => render(context)}
    </NavigationContext.Consumer>
  )
}

NavigationConsumer.propTypes = {
  render: PropTypes.func
}
