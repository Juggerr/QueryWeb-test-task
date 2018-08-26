from django.db import models


class Task(models.Model):
    STATUSES = (
        ("TODO", 'Todo'),
        ("DONE", 'Done'),
    )
    name = models.TextField()
    description = models.TextField(null=True, blank=True)
    status = models.CharField(choices=STATUSES, max_length=4)
