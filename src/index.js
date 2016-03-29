import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import ForeignProfile from './modules/Foreign-profile'
require('./stylesheets/modules/main.sass')
import SinglePhoto from './modules/SinglePhoto'
import NoMatch from './modules/NoMatch'
import Friends from './modules/Friends'
import Profile from './modules/Profile'
import Upload from './modules/Upload'
import Login from './modules/Login'
import { render } from 'react-dom'
import Feed from './modules/Feed'
import App from './modules/App'
import React from 'react'

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Feed}/>
      <Route path='/friends' component={Friends}/>
      <Route path='/login' component={Login}/>
      <Route path='/profile' component={Profile}/>
      <Route path='/upload' component={Upload}/>
      <Route path='/photos/:photo_id' component={SinglePhoto}/>
      <Route path='/user/:user_id' component={ForeignProfile}/>
      <Route path='*' component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('app'))
