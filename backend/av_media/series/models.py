from django.db import models

# Create your models here.
class Series(models.Model):
    title = models.CharField(max_length=50)
    streaming_service = models.CharField(max_length=30,default='')

    def __str__(self):
        return self.title

class Season(models.Model):
    show = models.ForeignKey(Series,on_delete=models.CASCADE)
    season_number = models.IntegerField(default=1)
    n_episodes = models.IntegerField(default=1)

    def __str__(self):
        return "Temporada %s - %s" % (self.season_number, self.show.title)