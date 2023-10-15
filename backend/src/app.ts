import express from "express";
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

async function init() {
    const app = express();
    app.use(express.json())
    //create server
    const gqlServer = new ApolloServer({
        typeDefs:`
        type Query {
            name:String
            say(name:String):String
        }
        `,
        resolvers:{
            Query:{
                name:()=>`hii`,
                say:(_,{name}:{name:string})=>`Hey ${name},  How are you?`

            }
        }
    });

    await gqlServer.start();

    app.get("/",(req,res)=>{
        res.json({message:"server is running"})
    })

    app.use("/graphql",expressMiddleware(gqlServer))

    app.listen(5000,()=>console.log("server running on port 5000"))
        
    };

init();