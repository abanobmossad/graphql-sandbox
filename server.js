const express= require('express');
const expressGraphQL = require('express-graphql')
const {schema} = require('./schema/schema')

const app = express()

app.use('/graphql',expressGraphQL({
    graphiql:true,
    schema
}))

app.get("/",(req,res)=>{
    res.send("the root app")
})

app.listen("1300",()=>{
    console.log("Server Is Listening To Port 1300");
    
})
    