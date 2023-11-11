import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
    

    // eslint-disable-next-line no-unused-vars
    const [blogs, setBlog]= useState( null );

    useEffect( ()=>{
        //fetch pour la recuperation de donnee via une api
        fetch('http://localhost:8000/blogs')
            .then((response)=> {
                return response.json();
            })
            .then((data)=>{
                setBlog(data);
            })
    },[] );

    return ( 
        <div className="home">
            
            {blogs && <BlogList blogs={blogs} title />}

        </div>
     );
}
 
export default Home;