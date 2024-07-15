
from django.urls import path
from . import views

urlpatterns = [
    path('places/', views.place_list, name='place_list'),
    path('places/<int:pk>/', views.place_detail, name='place_detail'),
]
