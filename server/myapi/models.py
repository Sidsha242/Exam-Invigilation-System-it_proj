#create schema of database here

from django.db import models

class Teacher(models.Model):
    email = models.CharField(max_length=80,unique=True)
    password = models.CharField(max_length=80)
    teacher_id = models.IntegerField()

class Exam(models.Model):
    subjCode = models.CharField(max_length=10)
    subjName = models.CharField()
    startDate = models.CharField()
    startTime = models.CharField()
    endTime = models.CharField()
    classRoom = models.CharField()