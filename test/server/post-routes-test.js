import { expect } from 'chai'
import request from 'supertest'
import body_parser from 'body-parser'
import app from '../../server/server'

describe('Post requests', (err, res) => {
  it('should post a photo to the database', (done) => {
    const expected_object = {
      photo_id: 1,
      external_photo_id: 2,
      user_id: 4,
      photo_url: 'http://fillmurray.com/800/800',
      caption: 'cats',
      created_at: '2016-03-30 16:47:59.941+13',
      updated_at: '2016-03-30 16:47:59.941+13',
      likes: 0,
      comments: 0
    }
    request(app)
      .post('/api/v1/photos')
      .expect(200)
      .end((err, res) => {
        const actual_object = res.body[0].photo_url
        expect(err).to.be.null
        expect(actual_object).to.equal(expected_object.photo_url)
        done()
      })
  })

  it('should post a photo to profile pic', (done) => {
    const expected_object = {
      photo_id: 1,
      external_photo_id: 2,
      user_id: 4,
      photo_url: 'http://fillmurray.com/800/800',
      caption: 'cats',
      created_at: '2016-03-30 16:47:59.941+13',
      updated_at: '2016-03-30 16:47:59.941+13',
      likes: 0,
      comments: 0
    }
    request(app)
      .post('/api/v1/profile/4')
      .expect(200)
      .end((err, res) => {
        const actual_object = res.body
        console.log(res.body)
        expect(err).to.be.null
        expect(actual_object).to.equal(expected_object)
      })
  })
})
