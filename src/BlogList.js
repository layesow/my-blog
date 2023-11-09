const BlogList = ({blogs,title}) => {
    return ( 
        <div>
            <h2>{title='Liste des articles'}</h2>

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
 
export default BlogList;