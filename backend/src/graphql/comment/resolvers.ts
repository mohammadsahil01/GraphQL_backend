
import { commentService,commentPayLoad } from "../../services/comment";

const queries = {
    listComments:async(_:any,blogId:string,context:any)=>{
        if(!context.user){
            throw new Error("unthorized")
        }
        let comments = await commentService.listComments(blogId);
        return comments;
    },

}

const mutations = {
    createComment:async(_:any,payLoad:commentPayLoad,context:any)=>{
        if(!context.user){
            throw new Error("unthorized")
        }
        const res = await commentService.createComment(payLoad)
        return res.id;
    }

}

export const resolvers = {queries,mutations}