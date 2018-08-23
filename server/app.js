const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();

// ALlow cross-origin request
app.use(cors());

// connect to mlab database
mongoose.connect('mongodb://localhost/graphql-playlist')
mongoose.connection.once('open', () => {
  console.log("MongoDB Connected")
})

// app.use('/test', (req, res) => res.send({success: true}))
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => { console.log('Listening on port 4000') })