import express from "express";

import { expressMiddleware } from '@apollo/server/express4';
import CreateApolloServer from "./graphql";


async function init() {
    const app = express();
    app.use(express.json())
    
    app.get("/",(req,res)=>{
        res.json({message:"server is running"})
    })

    app.use("/graphql",expressMiddleware(await CreateApolloServer()))

    app.listen(5000,()=>console.log("server running on port 5000"))
        
    };

init();