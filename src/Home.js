import BlogList from "./BlogList";
import useRecuperation from "./useRecuperation";
const Home = () => {
    
    //recuperation de useRecuperation
    const {data:blogs, isLoading, error}= useRecuperation('http://localhost:8000/blogs');

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