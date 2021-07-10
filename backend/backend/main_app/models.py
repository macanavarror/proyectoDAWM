from django.db import models

class Noticia(models.Model):
    titulo = models.CharField(max_length=200)
    contenido = models.CharField(max_length=2000)
    imagen = models.CharField(max_length=500)

class Contacto(models.Model):
    nombre = models.CharField(max_length=300)
    apellido = models.CharField(max_length=300)
    pais = models.CharField(max_length=100)
    correo = models.CharField(max_length=300)
    detalle = models.CharField(max_length=1500)