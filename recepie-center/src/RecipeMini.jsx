// eslint-disable-next-line react/prop-types
const RecipeMini = ({name, image, ingredients, calories}) => {
    return (
        <div className="RecipeMini">
            <img className="recipe-mini-image" src={image}></img>
            <div className="recipe-mini-description">
                <h1 className="recipe-mini-name">{name}</h1>
                <p className="recipe-mini-ingredients">Ingredients: {ingredients}</p>
                <p className="recipe-mini-calories">{calories} calories</p>
            </div>
        </div>
    )
}

export default RecipeMini;