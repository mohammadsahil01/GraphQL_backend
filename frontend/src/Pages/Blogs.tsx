
import { useQuery } from "@apollo/client";
import { GET_BLOGS } from "../graphql/queries";

const Blogs = () => {
    const {loading,data,error} = useQuery(GET_BLOGS,{
        context: {
          headers: {
            token:localStorage.getItem("token"), // Replace with your token
          },
        },
      })
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error</p>
    console.log(data)
    return <div>
        Blogs
    </div>;
}
 
export default Blogs;