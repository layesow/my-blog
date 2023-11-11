import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
    /* const test = () => {
        document.write("bonjour laye");
    }
    const test1 = (nom)=>{
        document.write(`Bonjour ${nom}`);
    } 

    // useState
    const [name, setName] = useState('Pabylaye');
    const test3 = ()=>{
        setName('Bamba');
    }
    */

    // eslint-disable-next-line no-unused-vars
    const [blogs, setBlog]= useState( null );

    // pour sa suppression des articles
    /* const HandleDelete = (id)=>{
        const newBlogs= blogs.filter( (blog) => blog.id !== id);
        setBlog(newBlogs);
    } */
    
    // faire une action de use effect et usestate
    //const [name, setName] = useState('Jeune');

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
            {/* <h2>Notre page d'accueil</h2>
                <button onClick={test} >cliquez ici pour voir le texte</button>

                <button onClick={
                    ()=>{
                        test1('sow');
                    }
                } >cliquez ici pour voir le texte2</button>


                <p>Salut {name}</p>
                <button onClick={test3} >cliquez ici pour voir l'evenement</button> */
            }
            {blogs && <BlogList blogs={blogs} title />}

            {/*  blogs.filter est utiliser pour filter les donnees */}
            {/* <BlogList blogs={blogs.filter( (blog)=> blog.auteur === 'Papa')} title /> */}
        </div>
     );
}
 
export default Home;