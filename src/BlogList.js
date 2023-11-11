const BlogList = ({blogs,title}) => {

    
    return ( 
        <div>
            <h2>{title='Liste des articles'}</h2>

            <div className="bloglist">
                {
                        blogs.map( (blog) =>(
                            <div className="blog" key={blog.id}>
                                <img className="image" src={blog.image} alt="" />
                                <a href="/" className="blog-titre">{blog.title} </a>
                                <p className="">{blog.body.slice(0, 70)}... </p>
                                <hr/>
                                <small className="blog-publication-date">Publier le: {blog.date}</small>
                                <p className="blog-author">Par: {blog.author} </p>

                                {/* suppression des articles */}
                                {/* <button onClick={ () =>HandleDelete(blog.id)}>supprimer un article</button> */}
                            </div>
                        ) )
                }    
            </div>
        </div>
     );
}
 
export default BlogList;