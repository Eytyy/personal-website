import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'

import { App } from './App'
import GlobalStyles from './styles/global.styles'
import DefaultErrorBoundry from './DefaultErrorBoundry'

if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
}

ReactDOM.render(
  <DefaultErrorBoundry>
    <BrowserRouter>
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </DefaultErrorBoundry>,
  document.getElementById('app')
)
