import prismadb from "../utils/prismadb";

export interface commentPayLoad{
    text:string
    userId:string
    blogId:string
}

export class commentService{

    public static async createComment(payLoad:commentPayLoad){
        const {text,userId,blogId} = payLoad

        const comment = await prismadb.comment.create({
            data:{
                text,
                userId,
                blogId
            }
        })
        return comment;
    }

    public static async listComments(id:string){
        return await prismadb.comment.findMany({
            where:{
                blogId:id
            }
        })
    }
}