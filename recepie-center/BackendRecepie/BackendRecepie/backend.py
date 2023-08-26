import json

path = "/Users/mariiaonokhina/Desktop/Cuny Tech Prep/Hackathon/recepie-center/recepie-center/public/ingredients.txt"

def set_ingredients(file_path):
    ingredients = []

    with open(file_path, mode='r') as foods:
        for food in foods:
            entry = food.strip()
            if entry not in ingredients:
                ingredients.append(entry)

    return ingredients

pantry = set_ingredients(path)

class Ingredient():
    def __init__(self, name, qty, unit):
        self.name = name
        self.qty = qty
        self.unit = unit

class Recipe():
    def __init__(self, json_obj):
        self.name = json_obj['name']

        ingredient_list = []
        for ingredient in json_obj['ingredients']:
            entry = Ingredient(ingredient['ingredient'], ingredient['quantity'], ingredient['unit'])
            ingredient_list.append(entry)

        self.ingredients = ingredient_list
        self.ingredient_count = json_obj['number_of_ingredients']
        self.steps = json_obj['steps']
        self.total_calories = json_obj['total_calories']
        self.json_string = str(json_obj)


def get_recipes(file_path):
    with open(file_path, mode='r') as file:
        data = json.load(file)

    recipe_object_list = []

    for recipe in data:
        recipe_object_list.append(Recipe(recipe))

    return recipe_object_list

# JSON file path
path = "/Users/mariiaonokhina/Desktop/Cuny Tech Prep/Hackathon/recepie-center/recepie-center/BackendRecepie/recipes.JSON"

recipe_obj_list = get_recipes(path)

def get_viable_recipes(recipe_obj_list, kitchen_pantry):
    matching_recipes = []

    print("Chosen Ingredients:", kitchen_pantry)

    for recipe in recipe_obj_list:
        recipe_ingredients = [ingredient.name for ingredient in recipe.ingredients]
        
        print("Recipe Ingredients:", recipe_ingredients)
        
        if all(ingredient in recipe_ingredients for ingredient in kitchen_pantry):
            matching_recipes.append(recipe)
            
        print("Viable Recipes:", [recipe.name for recipe in matching_recipes])

    return matching_recipes
