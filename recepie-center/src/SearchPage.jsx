import RecipeMini from "./RecipeMini";
// import Ingredient from "./Ingredient";

const SearchPage = () => {
    
    function runPythonScript(ingredients) {
        fetch(`http://localhost:8000/get-matching-recipes/?ingredients=${ingredients.join(',')}`)
        .then(response => response.json())
        .then(data => {
        console.log(data.matching_recipes); // Display matching recipes
        })
        .catch(error => {
        console.error('Error:', error);
        });
    }
        
        const ingredients = ['ingredient1', 'ingredient2', 'ingredient3'];
        runPythonScript(ingredients);

    return (
        <div className="SearchPage">
            <div className="search-container">
                <label htmlFor='choose-ingredient'>Choose ingredient: </label>

                <select name='choose-ingredient' id='choose-ingredient'>
                    {/* NEED TO CONNECT BACKEND HERE TO POPULATE INGREDIENTS */}
                    <option value='Ingredient 1'>Ingredient 1</option>
                    <option value='Ingredient 2'>Ingredient 2</option>
                    <option value='Ingredient '>Ingredient 3</option>
                </select>

                <div className="ingredient-container">
                    {/* {chosenIngredients.map((ingredient) => {
                            <Ingredient key={ingredient} ingredientName={ingredient} />
                    })} */}
                </div>

                <div className="add-delete-buttons-container">
                    <button className="add-btn">Add</button>
                    <button className="delete-btn">Delete</button>
                    {/* <button onClick={runPythonScript(chosenIngredients)}>RUN</button> */}
                </div>
            </div>

            <div className="found-recipes-container">
                <RecipeMini name='Ensalada Murciana' 
                            image='https://www.pequerecetas.com/wp-content/uploads/2022/07/ensalada-murciana-moje-mojete-murciano.jpg' 
                            ingredients='2 eggs, 2 potatoes, 1 onion, 5 olives, 1 tomato' 
                            calories='350'
                            />
                
                <RecipeMini name='Ensalada Murciana' 
                            image='https://www.pequerecetas.com/wp-content/uploads/2022/07/ensalada-murciana-moje-mojete-murciano.jpg' 
                            ingredients='2 eggs, 2 potatoes, 1 onion, 5 olives, 1 tomato' 
                            calories='350'
                            />
                            
                <RecipeMini name='Ensalada Murciana' 
                            image='https://www.pequerecetas.com/wp-content/uploads/2022/07/ensalada-murciana-moje-mojete-murciano.jpg' 
                            ingredients='2 eggs, 2 potatoes, 1 onion, 5 olives, 1 tomato' 
                            calories='350'
                            />
            </div>
        </div>
    )
}

export default SearchPage;