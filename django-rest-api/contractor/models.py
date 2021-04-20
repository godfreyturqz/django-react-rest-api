from django.db import models

# Create your models here.
class Contractor(models.Model):
    company = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    specialty = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name