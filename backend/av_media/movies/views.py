from .models import Movie
from .serializers import MovieListSerializer,MovieCreateSerializer
from rest_framework.generics import (DestroyAPIView,ListAPIView,CreateAPIView,UpdateAPIView)


# Create your views here.

#@api_view(['GET'])
#def Movies_list(request):
#    Movies = Movie.objects.all()
#    serializer = MovieSerializer(Movies, many=True)
#    return Response(serializer.data)

class MovieCreateAPIView(CreateAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieCreateSerializer

class MovieDeleteAPIView(DestroyAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieListSerializer
    lookup_field = 'id'

class MovieListAPIView(ListAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieListSerializer

class MovieUpdateAPIView(UpdateAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieListSerializer
    lookup_field = 'id'