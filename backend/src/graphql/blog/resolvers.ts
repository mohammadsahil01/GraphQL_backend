import { blogPayLoad, blogService } from "../../services/blog";

const queries = {
    listBlogs:async()=>{
        let blogs = await blogService.getAllBlogs();
        return blogs;
    },

    
    findBlogbyId:async(_:any,{id}:{id:string})=>{
        const blog = await blogService.findBlog(id)
        return blog;
    }
}

const mutations = {
    createBlog:async(_:any,payLoad:blogPayLoad)=>{
        const res = await blogService.createBlog(payLoad)
        return res.id;
    },

    updateBlog:async(id:string,payLoad:blogPayLoad)=>{
        const res = await blogService.updateBlog(id,payLoad)
        return res.id
    },

    deleteBlog:async(_:any,{id}:{id:string})=>{
        return await blogService.deleteBlog(id)    
    }

}

export const resolvers = {queries,mutations}