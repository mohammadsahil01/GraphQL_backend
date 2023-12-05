import { ApolloServer } from '@apollo/server';
import {User} from './user';
import { Blog } from './blog';
import {userTypeDefs } from './user/typedef';
import { blogTypeDefs } from './blog/typeDef';
import { commmentTypeDefs } from './comment/typeDef';
import { Comment } from './comment';

async function CreateApolloServer() {   

    const gqlServer = new ApolloServer({
        typeDefs:`
                ${userTypeDefs}
                ${blogTypeDefs}
                ${commmentTypeDefs}
                 `
        ,
        resolvers:{
            Query:{
                ...User.resolvers.queries,
                ...Blog.resolvers.queries,
                ...Comment.resolvers.queries
                
            },
            Mutation:{
                ...User.resolvers.mutations,
                ...Blog.resolvers.mutations,
                ...Comment.resolvers.mutations
            }
        },
        
    });
    
    await gqlServer.start();

    
    return gqlServer;

}

export default CreateApolloServer;