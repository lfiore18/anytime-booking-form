const mongoose = require('mongoose');
const Property = require('./models/property');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    
    // Sample data
    const properties = [
        { name: 'The Shire, Bagend', price: 173 },
        { name: 'Osgilliath, War Torn Ruins', price: 199, discount: 0.2 },
        { name: 'Mordor, Mt. Doom', price: 99, discount: 0.8 },
        { name: 'The Gray Haven', price: 499 },
        { name: 'Rivendell', price: 259 }
    ];

    await Property.insertMany(properties);
    console.log('Database seeded!');
    mongoose.disconnect();
  })
  .catch(err => console.error('Error connecting to MongoDB', err));