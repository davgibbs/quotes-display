from django.db import models

class Quote(models.Model):
    text = models.CharField(max_length=1000, help_text="This is the quote text")
    author = models.CharField(max_length=100, help_text="This is the quote author")
