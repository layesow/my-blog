// Import Link
import { Link } from "react-router-dom";

const BlogList = ({blogs,title}) => {

    return ( 
        <div>
            <div className="">
                slide
            </div>
            <h2>{title='Liste des articles'}</h2>
            <div className="bloglist">
                {
                        blogs.map( (blog) =>(
                            <div className="blog" key={blog.id}>
                                <Link to={`/blogs/${blog.id}`}><img className="image" src={blog.image} alt="" /></Link>
                                <Link to={`/blogs/${blog.id}`} className="blog-titre">{blog.title} </Link>
                                <p className="">{blog.body.slice(0, 70)}... </p>
                                <hr/>
                                <small className="blog-publication-date">Publier le: {blog.date}</small>
                                <p className="blog-author">Par: {blog.author} </p>
                            </div>
                        ) )
                }    
            </div>
        </div>
     );
}
 
export default BlogList;