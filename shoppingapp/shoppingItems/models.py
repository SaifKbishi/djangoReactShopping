from django.db import models

# Create your models here.
class Item(models.Model):
    item_name = models.CharField(max_length=100, unique=True, default='SOME STRING') # type: ignore
    quantity = models.IntegerField(blank=True, null=True) # type: ignore
    price = models.FloatField(default=0) # type: ignore
    description = models.CharField(max_length=100, blank=True) # type: ignore
    create_at = models.DateTimeField(auto_now_add=True,  blank=True) # type: ignore