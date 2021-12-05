from django.db import models
from django.core import validators
# Create your models here.
class Movie(models.Model):
    title = models.CharField(max_length=50)
    user_id = models.IntegerField(default=0)
    rating = models.IntegerField(default=0,validators=[validators.MaxValueValidator(limit_value=10),validators.MinValueValidator(limit_value=0)])

    def __str__(self):
        return self.title