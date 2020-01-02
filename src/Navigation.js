import React from 'react'
import PropTypes from 'prop-types'

import { Nav, NavigationLink } from './Navigation.styles'

const Navigation = ({ active, setActive }) => {
  return (
    <Nav>
      <NavigationLink
        className={active === 'work' ? 'active' : null}
        onClick={() => setActive('work')}
      >
        work
      </NavigationLink>
      <NavigationLink
        className={active === 'info' ? 'active' : null}
        onClick={() => setActive('info')}
      >
        info
      </NavigationLink>
    </Nav>
  )
}

Navigation.propTypes = {
  active: PropTypes.string,
  setActive: PropTypes.func
}
export default Navigation
