import { expect } from 'chai'
import request from 'supertest'
import body_parser from 'body-parser'
import app from '../../server/server'

describe('authentication routes', (err, res) => {
  it('should log the user in', (done) => {
    request(app)
      .post('/api/v1/login')
      .expect(200)
      .end((err, res) => {
        const actual_object = res.body
        const expected_object = {
          
        }
        expect(err).to.be.null
        expect(actual_object).to.equal(expected_object)
        done()
      })
  })
})
