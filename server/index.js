import express from 'express'
import routes from './routes'

const app = express()
const PORT = 3000

app.use(express.static('build'));
app.use(routes)
app.listen(PORT, () => console.log('Copy listening on port 3000!'))