import RecipeMini from "./RecipeMini";
import {useState, useEffect} from 'react';


const SearchPage = () => {
    const [ingredients, setIngredients] = useState([]);
    const [selectedIngredient, setSelectedIngredient] = useState('');
    const [chosenIngredients, setChosenIngredients] = useState([]);

    useEffect(() => {
        async function fetchIngredients() {
          try {
            const response = await fetch('src/assets/ingredients.txt');
            const text = await response.text();
            const ingredientList = text.split('\n').map((line) => line.trim());
            setIngredients(ingredientList);
          } catch (error) {
            console.error('Error fetching ingredients:', error);
          }
        }
    
        fetchIngredients();
      }, []);

    const runPythonScript = (ingredients) => {
        fetch(`http://localhost:8000/get-matching-recipes/?ingredients=${ingredients.join(',')}`)
        .then(response => response.json())
        .then(data => {
        console.log(data.matching_recipes); // Display matching recipes
        })
        .catch(error => {
        console.error('Error:', error);
        });
    }

    function addIngredient(ingredient) {
        if (!chosenIngredients.some(item => item.name === ingredient)) {
          setChosenIngredients(prevIngredients => [...prevIngredients, { id: Date.now(), name: ingredient, toBeDeleted: false }]);
        }
      }      

      function toggleDeleteFlag(id) {
        setChosenIngredients(prevIngredients =>
          prevIngredients.map(item =>
            item.id === id ? { ...item, toBeDeleted: !item.toBeDeleted } : item
          )
        );
      }

    function deleteMarkedIngredients() {
        setChosenIngredients(prevIngredients =>
          prevIngredients.filter(item => !item.toBeDeleted)
        );
    }

    return (
        <div className="SearchPage">
            <div className="search-container">
                <label htmlFor='choose-ingredient'>Choose ingredient: </label>

                <select
                    name='choose-ingredient'
                    id='choose-ingredient'
                    value={selectedIngredient}
                    onChange={(e) => setSelectedIngredient(e.target.value)}
                >
                <option value=''>Select an ingredient</option>
                {ingredients.map((ingredient, index) => (
                    <option key={index} value={ingredient}>
                        {ingredient}
                    </option>
                ))}
                </select>

                <div className="ingredient-container">
                {chosenIngredients.map(item => (
                    <div
                      key={item.id}
                      className={`chosen-ingredient ${item.toBeDeleted ? 'to-be-deleted' : ''}`} 
                      onClick={() => toggleDeleteFlag(item.id)}
                    >
                      {item.name}
                    </div>
                ))}
                </div>

                <div className="add-delete-buttons-container">
                    <button className="add-btn" onClick={() => addIngredient(selectedIngredient)}>Add</button>
                    <button className="delete-btn" onClick={deleteMarkedIngredients}>Delete</button>
                    <button className="search-recipes-btn" onClick={runPythonScript(ingredients)}>Search</button>
                </div>
            </div>

            <div className="found-recipes-container">
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