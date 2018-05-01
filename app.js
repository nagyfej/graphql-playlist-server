const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');

const schema = require('./schema/schema');
const config = require('./config/config');

const app = express();

mongoose.connect(config.database);
mongoose.connection.once('open', () => {
    console.log('Connected to database');
});

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () =>{
  console.log('Server listening for requests on port 4000.');
});
