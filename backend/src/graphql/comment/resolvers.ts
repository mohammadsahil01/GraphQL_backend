
import { commentService,commentPayLoad } from "../../services/comment";
import prismadb from "../../utils/prismadb"

const queries = {
    listComments:async(blogId:string)=>{
        let comments = await commentService.listComments(blogId);
        return comments;
    },

}

const mutations = {
    createComment:async(_:any,payLoad:commentPayLoad)=>{
        const res = await commentService.createComment(payLoad)
        return res.id;
    }

}

export const resolvers = {queries,mutations}