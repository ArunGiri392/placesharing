from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_users),
    path('signup/', views.signup),
    path('login/', views.login),
]
