# from django.shortcuts import render
# from django.http import JsonResponse
# import subprocess

# def run_python_script(request):
#     try:
#         result = subprocess.check_output(['python', '../../backend.py'])
#         return JsonResponse({'message': 'Python script executed successfull', 'output': result})
#     except subprocess.CalledProcessError as e:
#         return JsonResponse({'message': 'Error executing Python script', 'error': str(e)})

# RecepiePythonApp/views.py

from django.http import JsonResponse

from BackendRecepie.backend import search_recipes

def get_matching_recipes(request):
    if request.method == 'GET':
        chosen_ingredients = request.GET.getlist('ingredients')[0].split(',')
        print(request)
        print(request.GET)
        print(request.GET.getlist('ingredients'))
        print(request.GET.getlist('ingredients')[0].split(','))
        
        print("Chosen Ingredients:", chosen_ingredients)
        matching_recipes = search_recipes(chosen_ingredients)
        print("Matching Recipes:", matching_recipes)
        return JsonResponse({'matching_recipes': matching_recipes})
    else:
        return JsonResponse({'error': 'Invalid request method'})