const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const generatePassword = require('./generate_password')

app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', './views')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.redirect('/random_password_generator')
})

app.get('/random_password_generator', (req, res) => {
  res.render('home')
})

app.post('/', (req, res) => {
  const options = req.body
  const password = generatePassword(options)
  res.render('home', { password: password, options: options })
})

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})