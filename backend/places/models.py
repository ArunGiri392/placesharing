from django.db import models
from django.contrib.auth.models import User

class Place(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name='places')

    def __str__(self):
        return self.title
