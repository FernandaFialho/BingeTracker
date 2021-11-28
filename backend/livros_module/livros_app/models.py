from django.db import models

# Create your models here.
class Livro(models.Model):
    titulo = models.CharField(max_length=50)
    autor = models.CharField(max_length=30)
    num_paginas = models.IntegerField(default=1)

    def __str__(self):
        return self.titulo