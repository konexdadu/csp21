const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const signin12 = require('./Routes/signin12');
const bus = require('./Routes/bus');
const contactus = require('./Routes/contactus');

const auto = require('./Routes/auto');
const Teachers = require('./Routes/Teachers')
const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended :  true}));
app.use(bodyparser.json());
app.use('/signin12', signin12);
app.use('/bus', bus);
app.use('/auto', auto);
app.use('/contactus', contactus);
app.use('/Teachers', Teachers);





module.exports = app;