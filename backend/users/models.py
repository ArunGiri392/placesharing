# users/models.py
from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    image_url = models.URLField(max_length=200, blank=True, null=True)
