#converts json input django understandble framwork and database to user readable format

from rest_framework import serializers
from .models import Teacher,Exam

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = ('mahe_id',
                  'password',
                  'name')
        

class ExamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exam
        fields = ('subjCode',
                  'subjName',
                  'startDate',
                  'startTime',
                  'endTime',
                  'classRoom',
                  'mahe_id')