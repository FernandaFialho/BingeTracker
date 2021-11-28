from django.urls import path
from .views import (MovieCreateAPIView,MovieDeleteAPIView,MovieListAPIView,MovieUpdateAPIView)

urlpatterns = [
    path('getMovies',MovieListAPIView.as_view(), name='listagem'),
    path('postMovies/',MovieCreateAPIView.as_view(), name='envio'),
    path('putMovies/<str:id>/',MovieUpdateAPIView.as_view(), name='atualizar'),
    path('deleteMovies/<str:id>/',MovieDeleteAPIView.as_view(), name='deletar'),
]