import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
    
    // eslint-disable-next-line no-unused-vars
    const [blogs, setBlog]= useState( null );
    //loading
    const [isLoading, setIsLoading] = useState(true);
  
    //error

    useEffect( ()=>{
        //fetch pour la recuperation de donnee via une api
        fetch('http://localhost:8000/blogs')
            .then((response)=> {
                return response.json();
            })
            .then((data)=>{
                setBlog(data);
                setIsLoading(false);
                
            })
    },[] );

    return ( 
        <div className="home">
            {/* si le loading est true on affiche un loader sinon on affiche les blogs */}
            { isLoading && <div>En chargement... </div> }
            {blogs && <BlogList blogs={blogs} title />}

        </div>
     );
}
 
export default Home;