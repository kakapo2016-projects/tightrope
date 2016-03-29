import { expect } from 'chai'
import request from 'supertest'
import get_routes from '../../server/get-routes'


// uses the data from the seed database

describe('Get requests', () => {
  it('should return elon musk was here on /', (done) => {
    request(get_routes)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        const expected_text = 'elon musk was here on /'
        const actual_text = res.send('elon musk was here on /')
        expect(err).to.be.null
        expect(actual_text).to.equal(expected_text)
        done()
      })
  })

  it('should return one user by id', (done) => {
    request(get_routes)
      .get('/api/v1/users/:id/profile')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        const expected_text = ({})
        const actual_text = res.send({
          username: 'test',
          email: 'test@test',
          user_id: 2
        })
      })
  })

  it('should return one photo by id', (done) => {
    // request(get_routes)
    //   .get('/api/v1/photos/:id')
    //   .expect('Content-Type', )
    //   .expect(200)
    //   .end((err, res) => {
    //
    //   })
  })

  it('should return all the photo by id', (done) => {

  })

  it('should return all the photo by id by recent', (done) => {

  })

  it('should return all the photo by id by popular', (done) => {

  })

  it('should return all comment from one photo', (done) => {

  })

})
