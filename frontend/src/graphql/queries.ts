import { gql } from "@apollo/client";

export const GET_BLOGS = gql`

    {
        listBlogs {
            title
            content
            id        
        }
    }
`
