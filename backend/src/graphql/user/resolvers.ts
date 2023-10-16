import prismadb from "../../utils/prismadb"

const queries = {
    listUsers:async()=>{
        let users = await prismadb.user.findMany();
        return users;
    }
}

const mutations = {
    createUser:async(_:any,{name,password,email}:{name:string,password:string,email:string})=>{
        let newUser = await prismadb.user.create({
            data:{
                name,
                password,
                email
            }
        })
        return newUser ;
    }
}

export const resolvers = {queries,mutations}