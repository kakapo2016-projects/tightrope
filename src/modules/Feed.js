import React from 'react'
import Photoset from '../components/Photoset'
import request from 'superagent'
import FeedPhotos from '../components/Feed-photos'
import get from '../get-request'
require('../stylesheets/modules/feed.sass')

export default React.createClass({
  setInitialState: function () {
    return {

    }
  },

  componentDidMount: function () {
    get('http://localhost:3000/api/v1/photos/1', {user: 1}, function (err, res) {
      if (err) console.log('Error:', err)
      this.setState({user: res.body})
    }.bind(this))
  },

  render: function () {
    const dummyPhotos = {
  "photos": [
    {
      "comments": 10,
      "likes": 2,
      "photo_url": "http://www.fillmurray.com/800/800",
      "username": "Racist Ashley",
      "user_id": 1,
      'activeStreak': 23,
      'activeStreak': 23
    },
    {
      "comments": 10,
      "likes": 2,
      "photo_url": "http://www.fillmurray.com/800/800",
      "username": "Racist Ashley",
      "user_id": 1,
      'activeStreak': 23
    },
    {
      "comments": 10,
      "likes": 2,
      "photo_url": "http://www.fillmurray.com/800/800",
      "username": "Racist Ashley",
      "user_id": 1,
      'activeStreak': 23
    },
    {
      "comments": 10,
      "likes": 2,
      "photo_url": "http://www.fillmurray.com/800/800",
      "username": "Racist Ashley",
      "user_id": 1,
      'activeStreak': 23
    },
    {
      "comments": 10,
      "likes": 2,
      "photo_url": "http://www.fillmurray.com/800/800",
      "username": "Racist Ashley",
      "user_id": 1,
      'activeStreak': 23
    },
    {
      "comments": 10,
      "likes": 2,
      "photo_url": "http://www.fillmurray.com/800/800",
      "username": "Racist Ashley",
      "user_id": 1,
      'activeStreak': 23
    },
    {
      "comments": 10,
      "likes": 2,
      "photo_url": "http://www.fillmurray.com/800/800",
      "username": "Racist Ashley",
      "user_id": 1,
      'activeStreak': 23
    },
    {
      "comments": 10,
      "likes": 2,
      "photo_url": "http://www.fillmurray.com/800/800",
      "username": "Racist Ashley",
      "user_id": 1,
      'activeStreak': 23
    },
    {
      "comments": 10,
      "likes": 2,
      "photo_url": "http://www.fillmurray.com/800/800",
      "username": "Racist Ashley",
      "user_id": 1,
      'activeStreak': 23
    },
    {
      "comments": 10,
      "likes": 2,
      "photo_url": "http://www.fillmurray.com/800/800",
      "username": "Racist Ashley",
      "user_id": 1,
      'activeStreak': 23
    },
    {
      "comments": 10,
      "likes": 2,
      "photo_url": "http://www.fillmurray.com/800/800",
      "username": "Racist Ashley",
      "user_id": 1,
      'activeStreak': 23
    },
    {
      "comments": 10,
      "likes": 2,
      "photo_url": "http://www.fillmurray.com/800/800",
      "username": "Racist Ashley",
      "user_id": 1,
      'activeStreak': 23
    }
  ]
}

    return (
      <div>
        <FeedPhotos feedPhotos={dummyPhotos} />
      </div>
    )
  }
})
