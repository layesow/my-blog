import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
    
    // eslint-disable-next-line no-unused-vars
    const [blogs, setBlog]= useState( null );
    //loading
    const [isLoading, setIsLoading] = useState(true);

    // erreur usestate
    const [error, setError] = useState(null)
  
    //error

    useEffect( ()=>{
        //fetch pour la recuperation de donnee via une api
        fetch('http://localhost:8000/blogs')
            .then((response)=> {
                //error
                if(!response.ok) {
                    throw  Error('Desolé une erreur est survenue ...');
                }
                return response.json();
            })
            .then((data)=>{
                setBlog(data);
                setIsLoading(false);
                setError(null);
                
            })
            //erreur
            .catch((err) => {
                console.log(err.message);
                setError(err.message);
                setIsLoading(false);
            });
        
    },[] );

    return ( 
        <div className="home">
            {/* error */}
            {error && <div style={ {'color': 'red'} }>{error}</div>}
            {/* si le loading est true on affiche un loader sinon on affiche les blogs */}
            { isLoading && <div>En chargement... </div> }
            {blogs && <BlogList blogs={blogs} title />}

        </div>
     );
}
 
export default Home;