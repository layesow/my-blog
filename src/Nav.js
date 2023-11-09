const Nav = () => {
    return ( 
        <nav className="navbar">
            <div>
                <a href="/" className="logo">Jeune Dev</a>
            </div>
            <ul className="liens">
                <li><a href="/" className="lien">Accueil</a></li>
                <li><a href="/creer-article" className="lien buttonArticle">Créer un article</a></li>
            </ul>
        </nav>

     );
}
 
export default Nav;