import express from 'express'
const api = express.Router()

// routes.use('/api', (req, res) => api)
api.get('/feed', (req, res) => {
  req.params.user.id
})

export default api