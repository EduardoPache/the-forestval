from django.urls import path

from theforest.views import *

urlpatterns = [
    path('', FixView.as_view(), name='fix'),
    path('index', HomeView.as_view(), name='index'),
]