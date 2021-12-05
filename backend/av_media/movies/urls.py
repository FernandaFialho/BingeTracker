from django.urls import path
from .views import (MovieCreateAPIView,MovieDeleteAPIView,MovieListAPIView,MovieListFromUserAPIView,MovieUpdateAPIView)

urlpatterns = [
    path('getMovies',MovieListAPIView.as_view(), name='listagem'),
    path('getMovieFromUser/<str:user_id>',MovieListFromUserAPIView.as_view(), name='listagemuser'),
    path('postMovies/',MovieCreateAPIView.as_view(), name='envio'),
    path('putMovies/<str:id>/',MovieUpdateAPIView.as_view(), name='atualizar'),
    path('deleteMovies/<str:id>/',MovieDeleteAPIView.as_view(), name='deletar'),
]