import express from 'express'
import path from 'path'

const app = express()
const PORT = 3000


//app.use(express.static('../client'));

//console.log(__dirname + '../client/')
app.use(express.static('build'));

app.get('/', (req, res) => res.sendFile('index.html'))

app.listen(PORT, () => console.log('Example app listening on port 3000!'))