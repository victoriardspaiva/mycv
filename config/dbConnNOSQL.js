var mongo = require('mongodb')

var connMongoDB = function () {
    var db = new mongo.Db(
        'aula_senac',
        new mongo.Server(
            'localhost',
            27017,
            {}
        ),
        {}
    )
    return db
}

module.exports = function () {
    return connMongoDB
}