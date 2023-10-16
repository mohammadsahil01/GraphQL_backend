import { mutations } from "./mutations";
import { queries } from "./queries";

export const userTypeDefs = `#graphql
    type User {
        name: String
        password:String
        email: String
    }
    
    type Query {
        ${queries}
    }
    
    type Mutation {
        ${mutations}
    }
    `