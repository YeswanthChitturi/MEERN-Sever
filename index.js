const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = require('./schema');
const userAPi = require('./routes/userRoutes');
const cors = require('cors');
const resolvers = require('./resolvers');
const { __Schema } = require('graphql');
const request = require('supertest');

const app = express();
const port = 3001;
const url = 'mongodb+srv://yeswanthias2030:YESIAS2030@cluster0.lnhhlgi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

app.use(express.json());
app.use(cors());

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => { console.log('DB connected'); })
  .catch((err) => { console.log(err); });

const server = new ApolloServer({ typeDefs, resolvers });
app.use('/users', userAPi);

async function StartServer() {
  await server.start();
  server.applyMiddleware({ app });
  app.listen(port, () => {
    console.log(`server live ${port}`);
  });
}

StartServer();

// Export the app for testing
module.exports = app;
