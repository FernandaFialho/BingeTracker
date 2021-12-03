from .models import Livro
from rest_framework import serializers

class LivroListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Livro
        fields = ['id','titulo','autor','num_paginas']

class LivroCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Livro
        fields = ['titulo','autor','num_paginas']