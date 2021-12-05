from .models import Series
from rest_framework import serializers

class SeriesListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Series
        fields = ['id','title','user_id','rating']

class SeriesCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Series
        fields = ['title','user_id','rating']