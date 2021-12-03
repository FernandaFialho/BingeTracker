from .models import Season,Series
from rest_framework import serializers

class SeriesListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Series
        fields = ['id','title','streaming_service']

class SeriesCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Series
        fields = ['title','streaming_service']

class SeasonListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Season
        fields = ['id','show','season_number','n_episodes']

class SeasonCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Season
        fields = ['show','season_number','n_episodes']