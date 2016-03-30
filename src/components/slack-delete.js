import get from '../get-request'
import post from '../post-request'
import moment from 'moment'
import url from '../../config.js'

export default function (userId, callback) {
  get(url + '/api/v1/slack', {user_id: userId}, function (err, resp) {
    if (err) console.log('Slack error: ', err)
    if (moment().isAfter(resp.doa, 'day') === true) {
      window.alert('Sorry, you\'ve gone slack! Sign up to start again.')
      post(`${url}/api/v1/delete/${userId}`, '', function (err, res) {
        if (err) { console.log('Error: ', err); return }
        callback()
        browserHistory.push('/404')
      })
    } else {
      console.log('Don\'t delete')
      callback()
    }
  })
}
