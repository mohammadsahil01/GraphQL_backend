import { ApolloServer } from '@apollo/server';
import {User} from './user'
import {userTypeDefs } from './user/typedef';

async function CreateApolloServer() {   

    const gqlServer = new ApolloServer({
        typeDefs:`
                ${userTypeDefs}
                 `
        ,
        resolvers:{
            Query:{
                ...User.resolvers.queries
            },
            Mutation:{
                ...User.resolvers.mutations
            }
        }
    });
    await gqlServer.start();

    return gqlServer;

}

export default CreateApolloServer;