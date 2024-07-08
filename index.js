const express = require('express');
const mongoose = require('mongoose');
const {ApolloServer, gql} = require('apollo-server-express');
const typeDefs=require('./schema');
const userAPi = require('./routes/userRoutes')
const cors = require('cors')
const resolvers=require('./resolvers');
const app = express();
const port = 3001;
const url= 'mongodb+srv://yeswanthias2030:YESIAS2030@cluster0.lnhhlgi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

app.use(express.json())//parsing
app.use(cors())
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log('DB connected')})
.catch((err)=>{console.log(err)});
//start my apollo Express server 
const server = new ApolloServer({typeDefs,resolvers});
app.use('/users',userAPi);


async function  StartServer(){
    await server.start();
    server.applyMiddleware({app});//run my express code
    app.listen(port,()=>{
        console.log(`server live ${port}`);
    })
}
function Testing(){
    return 0;
}

StartServer();