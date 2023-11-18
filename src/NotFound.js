//Link import
import { Link } from 'react-router-dom';
const notFound = () => {
    return ( 
        <div className="not-found">
            <h1>Oops!...</h1>
            <p>Page not trouvée</p>
            <Link to='/'>Retour à la page d'accueil</Link>
        </div>
     );
}
 
export default notFound;