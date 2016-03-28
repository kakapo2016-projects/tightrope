// nice small index file

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import Feed from './modules/Feed'
import Friends from './modules/Friends'
import Login from './modules/Login'
import Profile from './modules/Profile'
import Upload from './modules/Upload'
require('./stylesheets/modules/main.sass')

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Feed}/>
      <Route path='/friends' component={Friends}/>
      <Route path='/login' component={Login}/>
      <Route path='/profile' component={Profile}/>
      <Route path='/upload' component={Upload}/>
    </Route>
  </Router>
), document.getElementById('app'))
