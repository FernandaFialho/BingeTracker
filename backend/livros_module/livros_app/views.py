from django.shortcuts import render
from .models import Livro
from .serializers import LivroListSerializer,LivroCreateSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.generics import (DestroyAPIView,ListAPIView,ListCreateAPIView,CreateAPIView,UpdateAPIView)


# Create your views here.

#@api_view(['GET'])
#def livros_list(request):
#    livros = Livro.objects.all()
#    serializer = LivroSerializer(livros, many=True)
#    return Response(serializer.data)

class LivroCreateAPIView(CreateAPIView):
    queryset = Livro.objects.all()
    serializer_class = LivroCreateSerializer

class LivroDeleteAPIView(DestroyAPIView):
    queryset = Livro.objects.all()
    serializer_class = LivroListSerializer
    lookup_field = 'id'

class LivroListAPIView(ListAPIView):
    queryset = Livro.objects.all()
    serializer_class = LivroListSerializer

class LivroListFromUserAPIView(ListCreateAPIView):
    queryset = Livro.objects.all()
    serializer_class = LivroListSerializer
    lookup_field = 'user_id'

    def list(self, request,user_id):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        queryset = [x for x in queryset if x.user_id== int(user_id)]
        serializer = LivroListSerializer(queryset, many=True)
        return Response(serializer.data)

class LivroUpdateAPIView(UpdateAPIView):
    queryset = Livro.objects.all()
    serializer_class = LivroListSerializer
    lookup_field = 'id'

