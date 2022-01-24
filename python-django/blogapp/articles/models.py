from django.db import models


class Article(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.TextField()
    alt = models.TextField()
