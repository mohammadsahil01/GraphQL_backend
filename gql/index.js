const express = require("express");

const { graphqlHTTP } = require("express-graphql");
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLSchema } = require("graphql");

const app = express();

let usersList = [
                {id:"1",
                 name:"Sahil",
                 email:"sahil01.com"},
                {id:"2",
                 name:"Rahul",
                 email:"Rahul01.com"},
                {id:"3",
                 name:"Shubham",
                 email:"shubham01.com"},
                ]

const UserType = new GraphQLObjectType({
    name:"UserType",
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        email:{type:GraphQLString},
    })
})

const RootQuery = new GraphQLObjectType({
    name:"RootQuery",
    fields:{
        users:{
            type: new GraphQLList(UserType),
            resolve() {
                return usersList;
            }
        },
        user:{
            type:UserType,
            args:{id:{type:GraphQLID}},
            resolve(parent,{id}){
                return usersList.find((user)=>user.id===id)
            }
        }

    }
})

const mutations = new GraphQLObjectType({
    name:"mutations",
    fields:{
        addUser:{
            type:UserType,
            args:{name:{type:GraphQLString},email:{type:GraphQLString}},
            resolve(parent,{name,email}){
                const NewUser = {name,email,id:Date.now().toString()};
                usersList.push(NewUser);
                return NewUser;
            }
        },
        updateUser:{
            type:UserType,
            args:{id:{type:GraphQLID},email:{type:GraphQLString},name:{type:GraphQLString}},
            resolve(parent,{id,email,name}){
                const user = usersList.find((u)=>u.id===id)
                user.email = email;
                user.name = name;
                return user;
            }
        },
        deleteUser:{
            type:UserType,
            args:{id:{type:GraphQLID}},
            resolve(parent,{id}){
                const user = usersList.find((u)=>u.id===id)
                usersList = usersList.filter((u)=>u.id!==id)
                return user;
        }
        }
    }
})

const schema =  new GraphQLSchema({query:RootQuery,mutation:mutations})

app.use("/graphql",graphqlHTTP({schema:schema,graphiql:true}))

app.listen(5000,()=>console.log("gql running on port 5000"))