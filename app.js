var express = require('express')
var exphbs = require('express-handlebars')
var app = express()
var hbs = exphbs.create({ defaultLayout: 'main' })

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('home', {
    name: process.env.NAME,
    bio: process.env.TWITTER_BIO,
    pic: process.env.TWITTER_PIC,
    email: process.env.EMAIL,
    twitter: process.env.TWITTER_HANDLE,
    linkedin: process.env.LINKEDIN_USER,

    location: process.env.LOCATION,
  })
})

var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})
