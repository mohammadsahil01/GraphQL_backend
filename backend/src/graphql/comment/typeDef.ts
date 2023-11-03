

export const commmentTypeDefs = `#graphql
    type Comment {
        id: ID!
        text: String
    }
    
    type Query {
        listComments(id:String):String
    }
    
    type Mutation {
       createComment(text:String,userId:String,blogId:String):String
    }
    `