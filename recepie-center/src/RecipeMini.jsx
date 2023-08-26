import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const RecipeMini = ({name, picture, ingredients, calories}) => {
    return (
        <Link to={`/${name}`} className="RecipeMini">
            <img className="recipe-mini-image" src={picture}></img>
            <div className="recipe-mini-description">
                <h1 className="recipe-mini-name">{name}</h1>
                <p className="recipe-mini-ingredients">Ingredients: {ingredients}</p>
                <p className="recipe-mini-calories">{calories} calories</p>
            </div>
        </Link>
    )
}

export default RecipeMini;