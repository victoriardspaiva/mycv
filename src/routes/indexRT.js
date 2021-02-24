var pessoa = require('./pessoa.json')
var skills = require('./skills.json')
var formacao = require('./formacao.json')
var experiencia = require('./experiencia.json')
var idiomas = require('./idiomas.json')

console.log(experiencia);
module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index', { pessoa, skills, formacao, experiencia, idiomas
         })
    })
}