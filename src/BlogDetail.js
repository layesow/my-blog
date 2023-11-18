import { useParams } from "react-router";
import useRecuperation from "./useRecuperation";
//history
import { useHistory } from 'react-router-dom';



const BlogDetail = () => {
    //recuperation de useRecuperation
    const {id} =useParams();
    const {data:blog, isLoading, error}= useRecuperation('http://localhost:8000/blogs/'+id);
    
    // appel a useHistory
    let history = useHistory();

    //delete avec handleDelete
    const handleDelete = () => {
      fetch(`http://localhost:8000/blogs/`+id,{
        method:'DELETE'
      }).then( () => {
        console.log('article suppreimer avec succes.');
        // rediriger ver accueil apres apres la ceation darticle
        history.push('/')
    })
    };
    return ( 
        <div className="">
            <h2 className="text-center">Page Detail de l'article  {/* {id} */}</h2>
            { isLoading && <div>En chargement... </div> }
            {error && <div style={ {'color': 'red'} }>{error}</div>}
            {blog && (
                <div className="blog-detail">
                <img src={blog.image} alt="" className="blog-detail-image" />
                <div className="blog-detail-content">
                  <h2 className="blog-detail-title">{blog.title}</h2>
                  <p><strong>Contenu :</strong> {blog.body}</p>
                  <p><strong>Publié par :</strong> {blog.author}</p>
                  <p><strong>Date de publication :</strong> {new Date(blog.date).toLocaleString()}</p>
                  {/* button delete */}
                  <button onClick={handleDelete} class="btn btn btn-danger mt-3">Supprimer</button>
                </div>
              </div>

            )}
        </div>
     );
}
 
export default BlogDetail;