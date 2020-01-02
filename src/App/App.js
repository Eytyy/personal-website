import React from 'react'
import { hot } from 'react-hot-loader'
import PropTypes from 'prop-types'
import { Link, Route, withRouter } from 'react-router-dom'

import Home from '../Home/Home'
import { Provider as ProjectsProvider, Details as Project } from '../Projects'

import { Container, ClosePage } from './styles'

const App = ({ location }) => {
  const [inside, updateLocation] = React.useState(false)

  React.useEffect(() => {
    updateLocation(location.pathname !== '/')
  }, [location])

  return (
    <Container className={`container ${inside ? 'container--sticky' : ''}`}>
      <ClosePage state={inside ? 'visible' : 'hidden'} as={Link} to="/">
        <span className="c"></span>
        <span className="w"></span>
        <span className="c"></span>
        <span className="w"></span>
        <span className="c"></span>
        <span className="w"></span>
        <span className="c"></span>
        <span className="w"></span>
        <span className="c"></span>
      </ClosePage>
      <main role="main">
        <ProjectsProvider>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/work/:id">
            <Project />
          </Route>
        </ProjectsProvider>
      </main>
    </Container>
  )
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
}

export default hot(module)(withRouter(App))
