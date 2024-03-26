from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.register, name='register'),
    path('login/', views.login, name='login'),
    path('add_exam/', views.add_exam, name='add_exam'),
    path('get_exam/',views.get_exam, name='get_exam')
]