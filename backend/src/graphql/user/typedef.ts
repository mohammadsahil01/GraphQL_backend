import { mutations } from "./mutations";
import { queries } from "./queries";

export const userTypeDefs = `#graphql
    type User {
        id: ID!
        name: String
        email: String
    }
    
    type Query {
        ${queries}
    }
    
    type Mutation {
        ${mutations}
    }
    `