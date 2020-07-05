const app = require('../src/server')
const mongoose = require('mongoose')
const supertest = require('supertest')
const request = supertest(app)

require('dotenv').config()

beforeAll(async () => {
  mongoose.connect(process.env.MONGODB_TEST_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(db => console.log('Database connected'))
    .catch(err => console.log(err))
})

afterAll(() => {
  mongoose.disconnect()
})

describe('POST /records', function () {
  const serviceWorking = {
    startDate: '2017-01-11',
    endDate: '2017-01-28',
    minCount: 1000,
    maxCount: 3000
  }

  const serviceWorking2 = {
    startDate: '2016-01-26',
    endDate: '2018-02-02',
    minCount: 2700,
    maxCount: 3000
  }

  const missingStartDate = {
    endDate: '2017-01-28',
    minCount: 1000,
    maxCount: 3000
  }

  const wrongDateFormat = {
    startDate: '2017-01-11',
    endDate: '20177-01-298',
    minCount: 1000,
    maxCount: 3000
  }

  const missingMaxCount = {
    startDate: '2017-01-11',
    endDate: '2017-01-28',
    minCount: 1000
  }

  it('should status 200 OK', async function () {
    await request.post('/api/v1/records')
      .send(serviceWorking)
      .expect(200)
  })

  it('should response code 0', async () => {
    const response = await request.post('/api/v1/records')
      .send(serviceWorking)
    expect(response.body.code).toBe('0')
  })

  it('should response message Success', async () => {
    const response = await request.post('/api/v1/records')
      .send(serviceWorking)
    expect(response.body.msg).toBe('Success')
  })

  it('should status 422 Unprocessable Entity', async function () {
    await request.post('/api/v1/records')
      .send({})
      .expect(422)
  })

  it('should response missing max count', async () => {
    const response = await request.post('/api/v1/records')
      .send(missingMaxCount)
    expect(response.body.msg).toBe('"maxCount" is required')
  })

  it('should response code 1', async () => {
    const response = await request.post('/api/v1/records')
      .send(missingMaxCount)
    expect(response.body.code).toBe('1')
  })

  it('should response missing start date', async () => {
    const response = await request.post('/api/v1/records')
      .send(missingStartDate)
    expect(response.body.msg).toBe('"startDate" is required')
  })

  it('should response wrong date format', async () => {
    const response = await request.post('/api/v1/records')
      .send(wrongDateFormat)
    expect(response.body.msg).toBe('"endDate" must be in YYYY-MM-DD format')
  })

  it('should record data2 first key match TAKwGc6Jr4i8Z487', async () => {
    const response = await request.post('/api/v1/records')
      .send(serviceWorking2)
    expect(response.body.records[0].key).toBe('TAKwGc6Jr4i8Z487')
  })

  it('should record data2 second key match NAeQ8eX7e5TEg7oH', async () => {
    const response = await request.post('/api/v1/records')
      .send(serviceWorking2)
    expect(response.body.records[1].key).toBe('NAeQ8eX7e5TEg7oH')
  })

  it('should record data first key match NAeQ8eX7e5TEg7oH', async () => {
    const response = await request.post('/api/v1/records')
      .send(serviceWorking)
    expect(response.body.records[0].key).toBe('NAeQ8eX7e5TEg7oH')
  })

  it('should record data second key undefined', async () => {
    const response = await request.post('/api/v1/records')
      .send(serviceWorking)
    expect(response.body.records[1]).toBe(undefined)
  })
})
