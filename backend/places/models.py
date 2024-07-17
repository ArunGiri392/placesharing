# places/models.py
from django.db import models
from users.models import CustomUser

class Place(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.URLField(max_length=200, blank=True, null=True)
    address = models.CharField(max_length=255)
    creator = models.ForeignKey(CustomUser, related_name='places', on_delete=models.CASCADE)

