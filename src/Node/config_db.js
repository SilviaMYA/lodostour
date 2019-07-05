/*development: {
    //url to be used in link generation
    url: '192.168.1.104',
    //mongodb connection settings
    database: {
        host:   '127.0.0.1',
        port:   '27017',
        db:     'site_dev'
    },
    //server details
    server: {
        host: '127.0.0.1',
        port: '3422'
    }
},
production: {
    //url to be used in link generation
    url: 'http://my.site.com',
    //mongodb connection settings
    database: {
        host: '127.0.0.1',
        port: '27017',
        db:     'site'
    },
    //server details
    server: {
        host:   '127.0.0.1',
        port:   '3421'
    }
}
};
module.exports = config;*/

var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'dbuser',
  password: 's3kreee7',
  database: 'my_db'
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()