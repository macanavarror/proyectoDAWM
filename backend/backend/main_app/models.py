from django.db import models

# Create your models here.
class Noticia(models.Model):
    titulo = models.CharField(max_length=200)
    contenido = models.CharField(max_length=2000)
    imagen = models.CharField(max_length=500)