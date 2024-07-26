const {AppoloServer} = require('appolo-server')
const mongoose = require('mongoose')
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')
const MONGODB = 'mongodb+srv://dariakhan:11725EC@cluster0.93ohwag.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const server = new AppoloServer({
    typeDefs,
    resolvers
})

mongoose.connect(MONGODB, {useNewUrlParser: true})
    .then(() => {
        console.log("MongoDB Connection successful");
        return server.listen({port: 5000})
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`);
    })