from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
import pickle
import pandas as pd
import numpy as np

def index(request):
    return render(request, 'index.html')

@api_view(['POST'])
def printing(request):
    if request.method == 'POST':
        state = request.data.get('state').strip()  # Strip any leading/trailing whitespace
        season = request.data.get('season').strip()  # Strip any leading/trailing whitespace
        file_path = 'rf_model.pkl'

        with open(file_path, 'rb') as file:
            data = pickle.load(file)
        rf_model = data['model']
        decoded_mapping_state = data['decoded_mapping_state']
        decoded_mapping_season = data['decoded_mapping_season']
        decoded_mapping_crop = data['decoded_mapping_crop']
        
        try:
            s_n = decoded_mapping_state[state]
            snn = decoded_mapping_season[season]

            crops_encoded = list(decoded_mapping_crop.keys())
            X_pred = pd.DataFrame({
                'State': [s_n] * len(crops_encoded),
                'Season': [snn] * len(crops_encoded),
                'Crop': crops_encoded
            })

            yields = list(rf_model.predict(X_pred))
            result = []
            for i, j in zip(X_pred.itertuples(), yields):
                result.append([s_n, snn, i.Crop, j])
            sorted_list = sorted(result, key=lambda x: x[3])
            for item in sorted_list:
                print(item)
            final_list = sorted_list[-5:]
            final_result = [decoded_mapping_crop[i[2]] for i in final_list]

            response = {
                'crops': final_result
            }
        except KeyError as e:
            response = {
                'error': f'Invalid input: {e}'
            }
    return Response(response)

from django.http import JsonResponse
from django.middleware.csrf import get_token

def get_csrf_token(request):
    return JsonResponse({'csrfToken': get_token(request)})
