// importataion de link pour la navigation
import { Link } from "react-router-dom";

const Nav = () => {
    return ( 
        <nav className="navbar">
            <div>
                <Link to="/" className="logo">Jeune Dev</Link>
            </div>
            <ul className="liens">
                <li><Link to="/" className="lien">Accueil</Link></li>
                <li><Link to="/ajouter" className="lien buttonArticle">Créer un article</Link></li>
            </ul>
        </nav>

     );
}
 
export default Nav;