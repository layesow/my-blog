import { useState, useEffect } from "react";

const useRecuperation = (url) => {
    // eslint-disable-next-line no-unused-vars
    const [data, setData]= useState( null );
    //loading
    const [isLoading, setIsLoading] = useState(true);

    // erreur usestate
    const [error, setError] = useState(null);
  
    useEffect( ()=>{
        //fetch pour la recuperation de donnee via une api
        fetch(url)
            .then((response)=> {
                //error
                if(!response.ok) {
                    throw  Error('Desolé une erreur est survenue ...');
                }
                return response.json();
            })
            .then((data)=>{
                setData(data);
                setIsLoading(false);
                setError(null);
                
            })
            //erreur
            .catch((err) => {
                console.log(err.message);
                setError(err.message);
                setIsLoading(false);
            });
        
    },[url] );
    
    return { data, isLoading, error };
}
 
export default useRecuperation;