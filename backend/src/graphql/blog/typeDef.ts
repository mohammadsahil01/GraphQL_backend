

export const blogTypeDefs = `#graphql
    type blog {
        id: ID!
        title:String
        content: String
        date: String
        userId:String
    }
    
    type Query {
        listBlogs:[blog!]!
        findBlogbyId(id:String):blog
    }
    
    type Mutation {
        createBlog(title:String, content: String!,ImageUrl:String,userId:String):String
        updateBlog(id:String,title:String,content:String,ImageUrl:String):String
        deleteBlog(id:String):String
    }
    `