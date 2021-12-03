from django.shortcuts import render
from .models import Livro
from .serializers import LivroListSerializer,LivroCreateSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import (DestroyAPIView,ListAPIView,CreateAPIView,UpdateAPIView)


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

class LivroUpdateAPIView(UpdateAPIView):
    queryset = Livro.objects.all()
    serializer_class = LivroListSerializer
    lookup_field = 'id'

