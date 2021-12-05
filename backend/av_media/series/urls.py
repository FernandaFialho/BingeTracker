from django.urls import path
from .views import (SeriesCreateAPIView,SeriesDeleteAPIView,SeriesListAPIView,SeriesUpdateAPIView )

urlpatterns = [
    path('getSeries',SeriesListAPIView.as_view(), name='listagemSeries'),
    path('postSeries/',SeriesCreateAPIView.as_view(), name='envioSeries'),
    path('putSeries/<str:id>/',SeriesUpdateAPIView.as_view(), name='atualizarSeries'),
    path('deleteSeries/<str:id>/',SeriesDeleteAPIView.as_view(), name='deletarSeries'),
]