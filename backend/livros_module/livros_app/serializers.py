from .models import Livro
from rest_framework import serializers

class LivroListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Livro
        fields = ['id','title','user_id','rating']

class LivroCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Livro
        fields = ['title','user_id','rating']