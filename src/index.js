import React from 'react'
import { render } from 'react-dom'
global.Ω = require('lomega')
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import About from './modules/Friends'
import Repos from './modules/Login'

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path='/repos' component={Repos}>
        <Route path='/repos/:userName/:repoName' component={Repo}/>
      </Route>
      <Route path='/about' component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))
