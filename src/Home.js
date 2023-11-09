import { useState } from "react";
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
    const [blogs, setBlog]= useState([
        {
            id:1 , 
            titre:'Titre1',
            description:"C'est un bonhomme de neige",
            imageUrl:"https://img-c.udemycdn.com/course/480x270/4675300_2632.jpg",
            auteur: "Paby",
            date: "07/11/2023"
        },
        {
            id:2 , 
            titre:'Titre2',
            description:"C'est un bonhomme de neige",
            imageUrl:"https://paidcoursesforfree.com/wp-content/uploads/2021/01/Complete-React-Developer-In-2020-W-Redux-Hooks-GraphQL.jpg",
            auteur: "Papa",
            date: "07/11/2023"
        },
        {
            id:2 , 
            titre:'Titre3',
            description:"C'est un bonhomme de neige",
            imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr470W02B_jSrS-2IcrYols8XKddbRLQpgV7SwCn3tEMFCsbyKrkPHlUp_5DHExdAqXqU&usqp=CAU",
            auteur: "Papa",
            date: "07/11/2023"
        },
        {
            id:2 , 
            titre:'Titre4',
            description:"C'est un bonhomme de neige",
            imageUrl:"https://res.cloudinary.com/practicaldev/image/fetch/s--rckqv8Sy--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/91yhnh0era2zx9ial7me.png",
            auteur: "Papa",
            date: "07/11/2023"
        }
    ]);

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
            <div className="bloglist">
            {
                    blogs.map( (blog) =>(
                        <div className="blog" key={blog.id}>
                            <img className="image" src={blog.imageUrl} alt="" />
                            <a href="/" className="blog-titre">{blog.titre} </a>
                            <p className="">Publier par: {blog.description} </p>
                            <hr/>
                            <small className="blog-publication-date">Publier le: {blog.date}</small>
                            <p className="blog-author">Par: {blog.auteur} </p>
                        </div>
                     ) )
            }    
            </div>
        </div>
     );
}
 
export default Home;