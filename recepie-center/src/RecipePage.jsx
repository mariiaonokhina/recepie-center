// eslint-disable-next-line react/prop-types
const RecipePage = ({name, image, ingredients, calories}) => {
    return (
        <div className="RecipePage">
            <img className="recipe-image" src={image}></img>
            <div className="recipe-description">
                <h1 className="recipe-name">{name}</h1>
                <p className="recipe-ingredients">Ingredients: {ingredients}</p>
                <h2>Steps:</h2>
                <ol>
                    <li>Step one</li>
                    <li>Step two</li>
                    <li>Step three</li>
                </ol>
                <p className="recipe-calories">{calories} calories</p>
            </div>
        </div>
    )
}

export default RecipePage;