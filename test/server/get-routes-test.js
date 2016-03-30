import { expect } from 'chai'
import request from 'supertest'
import body_parser from 'body-parser'
import app from '../../server/server'

// uses the data from the seed database

describe('Get requests', () => {
  it('should return elon musk was here on /', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        const expected_text = 'elon musk was here on /'
        const actual_text = res.text
        expect(err).to.be.null
        expect(actual_text).to.equal(expected_text)
        done()
      })
  })

  it('should return a user by id', (done) => {
    request(app)
      .get('/api/v1/users/4/profile')
      .expect(200)
      .end((err, res) => {
        const expected_object = {
          "user_id": 4,
          "username": "test",
          "hashed_password": "$2a$10$1wj8y9QOrlqZ0imw3x5fn.b.2MZ98PmRrhLR7K7QC3Frl6iqr06OG",
          "email": "test@test",
          "profile_pic": "http://fillmurray.com/800/800",
          "credits": 9,
          "active_streak": 32,
          "doa": "2016-03-30T08:01:29.988Z",
          "created_at": "2016-03-29T08:01:29.988Z",
          "updated_at": "2016-03-29T08:01:29.988Z"
        }

        const actual_object = res.body.username
        expect(err).to.be.null
        expect(actual_object).to.equal(expected_object.username)
        done()
      })
  })

  it('should return a photo by id', (done) => {
    request(app)
      .get('/api/v1/photos/4')
      .expect(200)
      .end((err, res) => {
        const expected_object = {
          "photo_id": 4,
          "external_photo_id": "2",
          "user_id": 4,
          "likes": 3,
          "photo": { "type": "Buffer", "data": [] },
          "photo_url": "http://res.cloudinary.com/dvzbt8kfq/image/upload/v1459121323/user_photos/Screen_Shot_2016-03-28_at_12.27.11_PM_j5yeqn.png",
          "caption": "cats",
          "comments": 3,
          "created_at": "2016-03-29T08:01:29.955Z",
          "updated_at": "2016-03-29T08:01:29.955Z"
        }
        const actual_object = res.body.photo_url
        expect(err).to.be.null
        expect(actual_object).to.equal(expected_object.photo_url)
        done()
      })
  })

  it('should return all the photo by id', (done) => {
    request(app)
      .get('/api/v1/users/4/photos')
      .expect(200)
      .end((err, res) => {
        const expected_object = {
          "photo_id": 1,
          "external_photo_id": "2",
          "user_id": 4,
          "likes": 4,
          "photo": { "type": "Buffer", "data": [] },
          "photo_url": "http://fillmurray.com/800/800",
          "caption": "cats",
          "comments": 4,
          "created_at": "2016-03-30T03:47:59.941Z",
          "updated_at": "2016-03-30T03:47:59.941Z"
        }
        const actual_object = res.body.profile_pic
        expect(err).to.be.null
        expect(actual_object).to.equal(expected_object.profile_pic)
        done()
      })
  })

  it('should return all the photo by id by recent', (done) => {
    request(app)
      .get('/api/v2/users/4/photos/recent')
      .expect(200)
      .end((err, res) => {
        const expected_object = {
          "photo_id": 1,
          "external_photo_id": "2",
          "user_id": 4,
          "likes": 4,
          "photo": { "type": "Buffer", "data": [] },
          "photo_url": "http://fillmurray.com/800/800",
          "caption": "cats",
          "comments": 4,
          "created_at": "2016-03-30T03:47:59.941Z",
          "updated_at": "2016-03-30T03:47:59.941Z"
        }
        const actual_object = res.body[0].photo_url
        expect(err).to.be.null
        expect(actual_object).to.equal(expected_object.photo_url)
        done()
      })
  })

  it('should return all the photo by id by popular', (done) => {
    request(app)
      .get('/api/v2/users/4/photos/popular')
      .expect(200)
      .end((err, res) => {
        const expected_object = {
          "photo_id": 6,
          "external_photo_id": "2",
          "user_id": 4,
          "likes": 10,
          "photo": { "type": "Buffer", "data": [] },
          "photo_url": "http://res.cloudinary.com/dvzbt8kfq/image/upload/v1459121346/user_photos/Screen_Shot_2016-03-28_at_12.26.52_PM_f9gy5b.png",
          "caption": "cats",
          "comments": 3,
          "created_at": "2016-03-30T03:47:59.941Z",
          "updated_at": "2016-03-30T03:47:59.941Z"
        }
        const actual_object = res.body[0].photo_url
        expect(err).to.be.null
        expect(actual_object).to.equal(expected_object.photo_url)
        done()
      })
  })
})
