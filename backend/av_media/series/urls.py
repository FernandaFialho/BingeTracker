from django.urls import path
from .views import (SeriesCreateAPIView,SeriesDeleteAPIView,SeriesListAPIView,SeriesListFromUserAPIView,SeriesUpdateAPIView )

urlpatterns = [
    path('getSeries',SeriesListAPIView.as_view(), name='listagemSeries'),
    path('postSeries/',SeriesCreateAPIView.as_view(), name='envioSeries'),
    path('getSeriesFromUser/<str:user_id>',SeriesListFromUserAPIView.as_view(), name='listagemuser'),
    path('putSeries/<str:id>/',SeriesUpdateAPIView.as_view(), name='atualizarSeries'),
    path('deleteSeries/<str:id>/',SeriesDeleteAPIView.as_view(), name='deletarSeries'),
]