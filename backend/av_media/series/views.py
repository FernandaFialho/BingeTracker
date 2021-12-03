from .models import Season,Series
from .serializers import SeasonListSerializer,SeasonCreateSerializer,SeriesListSerializer,SeriesCreateSerializer
from rest_framework.generics import (DestroyAPIView,ListAPIView,CreateAPIView,UpdateAPIView)

# Create your views here.
class SeriesCreateAPIView(CreateAPIView):
    queryset = Series.objects.all()
    serializer_class = SeriesCreateSerializer

class SeriesDeleteAPIView(DestroyAPIView):
    queryset = Series.objects.all()
    serializer_class = SeriesListSerializer
    lookup_field = 'id'

class SeriesListAPIView(ListAPIView):
    queryset = Series.objects.all()
    serializer_class = SeriesListSerializer

class SeriesUpdateAPIView(UpdateAPIView):
    queryset = Series.objects.all()
    serializer_class = SeriesListSerializer
    lookup_field = 'id'

class SeasonCreateAPIView(CreateAPIView):
    queryset = Season.objects.all()
    serializer_class = SeasonCreateSerializer

class SeasonDeleteAPIView(DestroyAPIView):
    queryset = Season.objects.all()
    serializer_class = SeasonListSerializer
    lookup_field = 'id'

class SeasonListAPIView(ListAPIView):
    queryset = Season.objects.all()
    serializer_class = SeasonListSerializer

class SeasonUpdateAPIView(UpdateAPIView):
    queryset = Season.objects.all()
    serializer_class = SeasonListSerializer
    lookup_field = 'id'