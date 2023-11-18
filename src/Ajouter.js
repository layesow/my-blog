import { useState } from "react";
// rediriger vers la page daccueil si on click sur le bouton submit
import { useHistory } from 'react-router-dom';

const Ajouter = () => {
    const [title, setTitle] = useState('');
    //cree moi la partie upload image
    const [image, setImage] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    let [isLoading, setIsLoading] = useState(false);

    // appel a useHistory
    let history = useHistory();

    //cette variable: HandleBlogAdding permet de aux user de ne pas envoyer les donnee en cliquant sur le button
    const HandleBlogAdding = (e) => {
        e.preventDefault();

        // cette partie permet de donnée directement la date de creation de larticle 
        const tmp_date = new Date().toISOString().split('T');
        const date = `${tmp_date[0]} ${tmp_date[1]}`;

        // cette permet de mettre les données sur le serveur
        const blog = { title, image, author, body, date }
        setIsLoading(true);

        // cela permet de mettre ces donées dans le server en utilisan la methode post
        fetch('http://localhost:8000/blogs',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            //dans body quon va passer l'objet qui permet de mettre les données sur le serveur (blog): const blog = { title, image, author, body, date }
            body: JSON.stringify(blog)
        }
        ).then( () => {
            console.log('article ajouter avec succes.');
            setIsLoading(false);
            // rediriger ver accueil apres apres la ceation darticle
            history.push('/')
        }).catch(error => {
            console.error('Erreur lors de l\'ajout de l\'article : ', error);
            setIsLoading(false);
         });
    }

    return ( 
        <div className="create-blog">
            <form onSubmit={ HandleBlogAdding } className="form">
                <div className="form-group">
                    <label htmlFor="title">Titre de l'article</label>
                    <input 
                        type="text"
                        className="form-control" 
                        id="title"
                        value={title}
                        onChange={ (e) => setTitle(e.target.value) }
                        required />
                </div>
                {/* cree la partie form-group pour upload image */}
                <div className="form-group">
                    <label htmlFor="image">Televerser une Image</label>
                    <input
                    type='file'
                    name='image'
                    accept=".png,.jpg,.jpeg"
                    className="form-control"
                    id='uploadFile'
                    onChange={(event)=>{setImage(URL.createObjectURL(event.target.files[0]))}}/>
                    
                </div>
                <div className="form-group">
                    <label htmlFor="author">Selectionez un auteur</label>
                    <select 
                        required 
                        className="form-control"
                        id="author"
                        value={author}
                        onChange={ (e) => setAuthor(e.target.value) }>
                        <option value="">-- Choisir une option --</option>
                        <option value="Laye sow">Laye sow</option>
                        <option value="Jeune Dev">Jeune Dev</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="body">Contenu de l'article</label>
                    <textarea 
                    required
                    value={body}
                    onChange={ (e) => setBody(e.target.value) }
                    className="form-control textarea"
                    id="body" rows="10"></textarea>
                </div>
                <div className="form-group">
                    { !isLoading && <button type="submit" className="btn-create">Creer Article</button>}
                    { isLoading && <button type="submit" className="btn-create" disabled>En cour de traitement ...</button>}
                </div>
            </form>
        </div>
     );
}
 
export default Ajouter;