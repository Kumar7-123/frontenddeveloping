from django.db import models

class Book(models.Model):
    title=models.CharField(max_length=25)
    author=models.CharField(max_length=25)
    publication_date=models.DateField()

    def __str__(self):
        return self.title
