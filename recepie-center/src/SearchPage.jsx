import RecipeMini from "./RecipeMini";

const SearchPage = () => {
    return (
        <div className="SearchPage">
            <div className="search-container">
                <input type='text' />
                <div className="ingredient-container">
                    No items picked...
                </div>

                <div className="add-delete-buttons-container">
                    <button className="add-btn">Add</button>
                    <button className="delete-btn">Delete</button>
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