from django.db import models

# Create your models here.
class Rfi(models.Model):
    rfiNumber = models.CharField(max_length=50)
    discipline = models.CharField(max_length=50)
    subject = models.CharField(max_length=50)
    question = models.CharField(max_length=255)
    answer = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name