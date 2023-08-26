from django.http import JsonResponse
from django.core.serializers import serialize

from BackendRecepie.backend import recipe_obj_list
from BackendRecepie.backend import get_viable_recipes

# WORKING CODE
# def get_matching_recipes(request):
#     if request.method == 'GET':
#         chosen_ingredients = request.GET.getlist('ingredients')[0].split(',')
#         print(request)
#         print(request.GET)
#         print(request.GET.getlist('ingredients'))
#         print(request.GET.getlist('ingredients')[0].split(','))
        
#         print("Chosen Ingredients:", chosen_ingredients)
#         matching_recipes = search_recipes(chosen_ingredients)
#         print("Matching Recipes:", matching_recipes)
#         return JsonResponse({'matching_recipes': matching_recipes})
#     else:
#         return JsonResponse({'error': 'Invalid request method'})
# END OF WORKING CODE

# def get_matching_recipes(request):
#     if request.method == 'GET':
#         chosen_ingredients = request.GET.getlist('ingredients')[0].split(',')

#         matching_recipes = get_viable_recipes(recipe_obj_list, chosen_ingredients)
        
        
#         # Convert the recipe objects to JSON using Django's serialization
#         recipe_data = serialize('json', matching_recipes)

#         # # Convert the list of recipe dictionaries to JSON format
#         # recipe_data = []
#         # for recipe in matching_recipes:
#         #     recipe_data.append(recipe.__dict__)

#         return JsonResponse({'matching_recipes': recipe_data})
#     else:
#         return JsonResponse({'error': 'Invalid request method'})


def get_matching_recipes(request):
    if request.method == 'GET':
        chosen_ingredients = request.GET.getlist('ingredients')[0].split(',')

        matching_recipes = get_viable_recipes(recipe_obj_list, chosen_ingredients)

        # Convert the recipe data to a list of dictionaries
        recipe_data = []
        for recipe in matching_recipes:
            recipe_dict = {
                "name": recipe.name,
                "ingredients": [
                    {
                        "ingredient": ingredient.name,
                        "quantity": ingredient.qty,
                        "unit": ingredient.unit
                    }
                    for ingredient in recipe.ingredients
                ],
                "number_of_ingredients": recipe.ingredient_count,
                "steps": recipe.steps,
                "total_calories": recipe.total_calories
            }
            recipe_data.append(recipe_dict)

        return JsonResponse({'matching_recipes': recipe_data})
    else:
        return JsonResponse({'error': 'Invalid request method'})
