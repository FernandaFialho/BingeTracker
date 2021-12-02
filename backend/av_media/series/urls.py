from django.urls import path
from .views import (SeasonCreateAPIView,SeasonDeleteAPIView,SeasonListAPIView,SeasonUpdateAPIView,SeriesCreateAPIView,SeriesDeleteAPIView,SeriesListAPIView,SeriesUpdateAPIView )

urlpatterns = [
    path('getSeasons',SeasonListAPIView.as_view(), name='listagemSeason'),
    path('postSeasons/',SeasonCreateAPIView.as_view(), name='envioSeason'),
    path('putSeasons/<str:id>/',SeasonUpdateAPIView.as_view(), name='atualizarSeason'),
    path('deleteSeasons/<str:id>/',SeasonDeleteAPIView.as_view(), name='deletarSeason'),
    path('getSeries',SeriesListAPIView.as_view(), name='listagemSeries'),
    path('postSeries/',SeriesCreateAPIView.as_view(), name='envioSeries'),
    path('putSeries/<str:id>/',SeriesUpdateAPIView.as_view(), name='atualizarSeries'),
    path('deleteSeries/<str:id>/',SeriesDeleteAPIView.as_view(), name='deletarSeries'),
]