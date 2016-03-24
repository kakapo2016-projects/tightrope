'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import domready from 'domready'
global.Ω = require('lomega')

import App from './components/App'

domready(() => {
  ReactDOM.render(
    <App />,
    document.querySelector('#app')
  )
})
