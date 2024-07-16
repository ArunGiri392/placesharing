from django.urls import path
from . import views

urlpatterns = [
    path('<int:pid>/', views.get_place_by_id),
    path('user/<int:uid>/', views.get_places_by_user_id),
    path('', views.create_place),
     path('<int:pid>/', views.delete_place),
    path('<int:pid>/', views.update_place),
]
