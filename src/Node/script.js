const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;

//var mysql = require('msql');
console.log('INTO NODE.js');
// console.log(this.state);
// console.log('END formContact.js');

app.use(express.static('../library'))
 
app.use(bodyParser.urlencoded({extended: false}))

app.use('view engine', 'pug')

app.get('/', function(req, resp){
    resp.sendFile('index.html', { root: __dirname})
});


var connection = mysql.createConnection({
    //properties
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'lodos_tour'
});



connection.connect(function(error){
    if(error){
        console.log('NO connected');
    }else{
        console.log('Yuo are conected');
    }
});


app.post('/process_contact', function(req, res){
    console.log(req.body);

    var my_query = "insert into contact values(null, '"+ req.body.fullName + "', '"+ req.body.email + "', '"+ req.body.phone_number + "', '"+ req.body.message + "')";
    connection.query(my_query, function (err) {
        if (err) {
            throw err
        }else{
            res.render('index', {title: 'Data saved', message: 'Data successfully'})
        }
      })
});

/*
app.get('/', function(req, resp){
    //mysql
    connection.query("SELECT * FROM city", function(error, rows, fields){
        if(!error){
            console.log('Database query successfull');
        }else{
            console.log('Error in query');
        }
    });
})*/

// app.listen(3000);


connection.end()