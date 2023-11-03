import prismadb from "../../utils/prismadb"
import { CreateUserPayLoad, UserService } from "../../services/user";
const queries = {
    listUsers:async()=>{
        let users = await prismadb.user.findMany();
        return users;
    },

    

    getCurrentLoggedInUser:async(_:any,parameters:any,context:any)=>{
        if(context && context.user){
            const id = context.user.id
            const user = await UserService.getUserbyID(id)
            return user;
        }
        throw new Error('I dont know you')
    }
}

const mutations = {
    createUser:async(_:any,payLoad:CreateUserPayLoad)=>{
        const res = await UserService.createUser(payLoad)
        return res.id;
    },

    LoginUser:async(_:any,payLoad:{email:string,password:string})=>{
        const token = await UserService.getUserToken(payLoad)
        return token;
    }
}

export const resolvers = {queries,mutations}