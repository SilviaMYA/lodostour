
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const lodos_tour_routes = express.Router();
const API_PORT = 3001;


app.use(cors());
app.use(bodyParser.json());


let Contact = require('./models/contact');
let City = require('./models/city');

const server = '127.0.0.1:27017'; // DB SERVER
const database = 'lodos_tour_mongodb';      //DB NAME
const dbRoute = `mongodb://${server}/${database}`;  // this is our MongoDB database
mongoose.connect(dbRoute, { useNewUrlParser: true });  // connects our back end code with the databasedb
const connection = mongoose.connection;
connection.once('open', function () {
  console.log('MongoDB connected to the database successfully');
});




/***********CITY******* */
//endpoint CITY
lodos_tour_routes.route('/city').get(function (req, res) {
  City.find(function (err, lodos_tour_mongodb) {
    if (err) {
      console.log(err);
    } else {
      res.json(lodos_tour_mongodb);
    }
  });
});

/***********CONTACT******* */
//endpoint Contact
lodos_tour_routes.route('/contact').get(function (req, res) {
  Contact.find(function (err, lodos_tour_mongodb) {
    if (err) {
      console.log(err);
    } else {
      res.json(lodos_tour_mongodb);
    }
  });
});

//get id
lodos_tour_routes.route('/:id').get(function (req, res) {
  let id = req.params.id;
  Contact.findById(id, function (err, lodos_tour_mongodb) {
    res.json(lodos_tour_mongodb);
  });
});


//add item
lodos_tour_routes.route('/add').post(function (req, res) {
  let new_contact = new Contact(req.body);
  new_contact.save()
    .then(new_contact => {
      res.status(200).json({ 'Contact': 'contact added successfully' });
    })
    .catch(err => {
      res.status(400).send('adding new contact failed');
    });
});


// this method overwrites existing data in our database
lodos_tour_routes.route('/update/:id').post(function (req, res) {
  Contact.findById(req.params.id, function (err, lodos_tour_mongodb) {
    if (!Contact)
      res.status(404).send('data is not found');
    else
      Contact.full_name = req.body.full_name;
      Contact.email = req.body.email;
      Contact.phone_number = req.body.phone_number;
      Contact.message = req.body.message;

      Contact.save().then(Contact => {
        res.json('Contact updated');
      })
      .catch(err => {
        res.status(400).send("Update Contact not possible");
      });
  });
});



app.use('/lodos_tour_mongodb', lodos_tour_routes);




// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
