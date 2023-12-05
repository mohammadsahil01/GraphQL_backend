import { blogPayLoad, blogService } from "../../services/blog";

  

const queries = {
    listBlogs:async(_:any,parameters:any,context:any)=>{
        if(!context.user){
            throw new Error("unthorized")
        }
        const  blogs = await blogService.getAllBlogs();
        return blogs;
    },

    
    findBlogbyId:async(_:any,{id}:{id:string},context:any)=>{
        if(!context.user){
            throw new Error("unthorized")
        }
        const blog = await blogService.findBlog(id)
        return blog;
    }
}

const mutations = {
    createBlog:async(_:any,payLoad:blogPayLoad,context:any)=>{
        if(!context.user){
            throw new Error("unthorized")
        }
        const res = await blogService.createBlog(payLoad)
        return res.id;
    },

    updateBlog:async(id:string,payLoad:blogPayLoad,context:any)=>{
        if(!context.user){
            throw new Error("unthorized")
        }
        const res = await blogService.updateBlog(id,payLoad)
        return res.id
    },

    deleteBlog:async(_:any,{id}:{id:string},context:any)=>{
        if(!context.user){
            throw new Error("unthorized")
        }
        return await blogService.deleteBlog(id)    
    }

}

export const resolvers = {queries,mutations}