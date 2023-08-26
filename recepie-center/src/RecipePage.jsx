import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
const RecipePage = () => {
    const { recipeName } = useParams();
    const [recipeData, setRecipeData] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8000/api/recipe/${recipeName}`)
            .then(response => response.json())
            .then(data => setRecipeData(data))
            .catch(error => console.error('Error fetching recipe:', error));
    }, [recipeName]);

return (
    <div className="RecipePage">
          <img className="recipe-image" src="https://www.pequerecetas.com/wp-content/uploads/2022/07/ensalada-murciana-moje-mojete-murciano.jpg" alt={recipeData.name} />
          <div className="recipe-description">
              <h1 className="recipe-name">{recipeData.name}</h1>
              <p className="recipe-ingredients">Ingredients: {recipeData.ingredients}</p>
              <h2>Steps:</h2>
              <ol>
                  {recipeData.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                  ))}
              </ol>
              <p className="recipe-calories">{recipeData.total_calories}</p>
          </div>
      </div>
    )
}

export default RecipePage;