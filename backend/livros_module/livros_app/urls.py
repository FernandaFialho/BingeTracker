from django.urls import path
from . import views

urlpatterns = [
    path('getLivros',views.livros_list, name='listagem'),
]