var express = require('express')
var consign = require('consign')
var bodyParser = require('body-parser')
// var expressValidator = require('express-validator')

var app = express()

app.use(bodyParser.urlencoded({ extended: true }))
// app.use(expressValidator())

app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('./public'))
app.use('/uploads', express.static('./public/uploads/'))

consign()
    .include('src/routes') // todos arquivos do routes
    .into(app) // jogando tudo pra dentro da variavel app

    module.exports = app // exportando a variavel app