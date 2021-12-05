from .models import Movie
from .serializers import MovieListSerializer,MovieCreateSerializer
from rest_framework.generics import (DestroyAPIView,ListAPIView,CreateAPIView,UpdateAPIView)
from rest_framework.generics import (DestroyAPIView,ListAPIView,ListCreateAPIView,CreateAPIView,UpdateAPIView)
from rest_framework.response import Response

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

class MovieListFromUserAPIView(ListCreateAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieListSerializer
    lookup_field = 'user_id'

    def list(self, request,user_id):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        queryset = [x for x in queryset if x.user_id== int(user_id)]
        serializer = MovieListSerializer(queryset, many=True)
        return Response(serializer.data)

class MovieUpdateAPIView(UpdateAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieListSerializer
    lookup_field = 'id'