import get from '../get-request'
import moment from 'moment'

export default function (userId, callback) {
  get('http://localhost:3000/api/v1/slack', {user_id: userId}, function (err, resp) {
    if (err) console.log('Slack error: ', err)
    if (moment().isAfter(resp.doa, 'day') === true) {
      console.log('Fuck shit up')
      callback()
    } else {
      console.log('shit is a-okay')
      callback()
    }
  })
}
