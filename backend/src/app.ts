import express from "express";

import { expressMiddleware } from '@apollo/server/express4';
import CreateApolloServer from "./graphql";
import { UserService } from "./services/user";
import cors from "cors";

async function init() {
    const app = express();
    app.use(express.json())
    app.use(cors())
    app.get("/",(req,res)=>{
        res.json({message:"server is running"})
    })

    app.use("/graphql",expressMiddleware(await CreateApolloServer(),{
        context:async({req})=>{
        //@ts-ignore
        const token = req.headers['token']
         try {
           const user = UserService.decodeJWT(token as string)
            return {user}
         } catch (error) {
            return {error}
         }
        
        
    }}))

    app.listen(5000,()=>console.log("server running on port 5000"))
        
    };

init();