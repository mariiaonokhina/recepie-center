recipes = {
    'Recipe 1': ['ingredient1', 'ingredient2', 'ingredient3'],
    'Recipe 2': ['ingredient2', 'ingredient3', 'ingredient4'],
    'Recipe 3': ['ingredient5'],
    'Recipe 4': ['ingredient1','ingredient3','ingredient5']
    # Add more recipes here
}

def search_recipes(chosen_ingredients):
    matching_recipes = []

    for recipe, ingredients in recipes.items():
        if all(ingredient in ingredients for ingredient in chosen_ingredients):
            matching_recipes.append(recipe)

    return matching_recipes

# class Recipe():  
    
#     def __init__(self, name, ingredients, equipment=None, nutrition_facts=None):
#         self.recipe_name = name 
#         self.ingredients = ingredients # A list of ingredients.
#         self.equipment = equipment # A list of required equipment.
#         self.nutrition_facts = nutrition_facts # Undetermined data structure and details.
#         self.calories = 0

#     def get_calories(self, ingredient_dict):
#         for ingredient in self.ingredients:
#             self.calories += ingredient_dict[ingredient]
        
#         return self.calories
    

# # This function recieves a dictionary of recipes associated with a Recipe
# # object and a dictionary of food item names assiated with their respective 
# # calorie count. It then searches through each Recipe object and checks if 
# # all its ingredients are present in the inventory_dict. It then returns 
# # a list of all the Recipe objects whos ingredients member list intersects 
# # with the inventory_dict. 
# def check_viable_recipe(recipe_dict, inventory_dict):
#     result = []

#     for recipe in recipe_dict:
#         ingredient_list = recipe_dict[recipe].ingredients
#         flag = True

#         for ingredient in ingredient_list:
#             if ingredient not in inventory_dict:
#                 flag = False
        
#         if flag:
#             result.append(recipe)
    
#     return result


# # Recieves a path to a csv file where it reads in, formats, and stores
# # the first column of each row as the key and second column of each row
# # as the associated value. 
# def fill_pantry(invetory_csv):
#     food_pantry = {}

#     with open(invetory_csv, mode='r') as inventory:

#         for item in inventory:
#             entry = item.strip().split(',')
#             entry = [entry[0].lower(), int(entry[1])]
#             food_pantry[entry[0]] = entry[1]

#     return food_pantry


# # Fill and return a dictionary where the key is the recipe name
# # and the associated value is an object of type Recipe.
# def set_cookbook():
#     cookbook = {}
#     recipe_count = int(input("How many recipies do you want to enter: "))

#     for recipe in range(recipe_count):
#         recipe_name = input("What's the recipe called? ")
#         ingredient_count = int(input("How many ingredients are there? "))
#         ingredient_list = []

#         for ingredient in range(ingredient_count):
#             ingredient_name = input("Enter the ingredient name: ")
#             ingredient_list.append(ingredient_name)

#         entry = Recipe(recipe_name, ingredient_list)
#         cookbook[entry.recipe_name] = entry

#     return cookbook


# path = "food_calories.csv"
# recipes = check_viable_recipe(set_cookbook(), fill_pantry(path))

# print(recipes)
