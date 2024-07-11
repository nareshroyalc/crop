from django.contrib import admin
from django.urls import path,re_path
from .views import index, printing,get_csrf_token

urlpatterns = [
    path('',index),
    path('admin/', admin.site.urls),
    path('api/crop-form-submit/', printing),
     path('api/get-csrf-token/', get_csrf_token, name='get_csrf_token'),
     re_path(r'^.*$', index),  # Catch-all pattern for React app
]