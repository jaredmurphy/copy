import express from 'express'
import path from 'path'
import api from './api'

const routes = express.Router()

routes.use('/api', (req, res) => api)

routes.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../../client/index.html'))
})

export default routes