from django.db import models

class Teacher(models.Model):
    mahe_id = models.CharField(max_length=15,unique=True,default='MAHE0000000') #unique key for Teacher
    password = models.CharField(max_length=20)
    name = models.CharField(max_length=80)

class Exam(models.Model):
    subjCode = models.CharField(max_length=10,unique=True) #unique key for subjCode for multiple rooms of one subj use formay subjcode-no.of class
    subjName = models.CharField()
    startDate = models.DateField()
    startTime = models.TimeField()
    endTime = models.TimeField()
    classRoom = models.CharField()
    mahe_id = models.CharField(null=True)