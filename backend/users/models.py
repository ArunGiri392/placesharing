# # users/models.py
# from django.contrib.auth.models import AbstractUser
# from django.db import models

# class CustomUser(AbstractUser):
#     image_url = models.URLField(max_length=200, blank=True, null=True)


from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    image_url = models.URLField(null=True, blank=True)

    def __str__(self):
        return self.username
