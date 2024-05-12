const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.redirect('/random_password_generator')
})

app.get('/random_password_generator', (req, res) => {
  res.send('password')
})

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})