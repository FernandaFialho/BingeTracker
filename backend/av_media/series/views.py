from .models import Series
from .serializers import SeriesListSerializer,SeriesCreateSerializer
from rest_framework.generics import (DestroyAPIView,ListAPIView,ListCreateAPIView,CreateAPIView,UpdateAPIView)
from rest_framework.response import Response

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

class SeriesListFromUserAPIView(ListCreateAPIView):
    queryset = Series.objects.all()
    serializer_class = SeriesListSerializer
    lookup_field = 'user_id'

    def list(self, request,user_id):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        queryset = [x for x in queryset if x.user_id== int(user_id)]
        serializer = SeriesListSerializer(queryset, many=True)
        return Response(serializer.data)
