from django.db import models

# Create your models here.
class Series(models.Model):
    title = models.CharField(max_length=50)
    n_episodes = models.IntegerField(default=1)

    def __str__(self):
        return self.titulo