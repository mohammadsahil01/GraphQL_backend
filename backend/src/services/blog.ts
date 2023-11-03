import prismadb from "../utils/prismadb";


export interface blogPayLoad{
    title:string
    content:string
    ImageUrl:string
    userId:string

}

export class blogService{

    public static async getAllBlogs(){
        const blogs = await prismadb.blog.findMany();
        return blogs;
    }

    public static async createBlog(payLoad:blogPayLoad){
        const {title,content,ImageUrl,userId} = payLoad
        const blog = await prismadb.blog.create({
            data:{
                title,content,ImageUrl,userId
            }
        })
        return blog
    }

    public static async findBlog(id:string){
            console.log("id type:", typeof id);
            return await prismadb.blog.findUnique({where:{
                id
            }})
        
        
    }

    public static async updateBlog(blogId: string, updatedPayload: blogPayLoad) {
        const existingBlog = await blogService.findBlog(blogId)
    
        if (!existingBlog) {
            throw new Error(`Blog with id ${blogId} not found`);
        }

        const {title,content,userId} = updatedPayload
        const updatedBlog = await prismadb.blog.update({
            where: {
                id: blogId,
            },
            data: {
                title,
                content,
                userId,
            },
        });
    
        return updatedBlog;
    }
    
    public static async deleteBlog(blogId:string){
        const blog = blogService.findBlog(blogId)
        
        if(!blog) return new Error("blog not found")

        const res = await prismadb.blog.delete({
            where:{
                id:blogId
            }
        })
        return res.id
    }

}