from .models import Series
from .serializers import SeriesListSerializer,SeriesCreateSerializer
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
