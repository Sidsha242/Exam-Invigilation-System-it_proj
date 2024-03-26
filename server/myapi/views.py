from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status


from myapi.models import Teacher,Exam
from myapi.serializers import TeacherSerializer,ExamSerializer



@api_view(['POST'])
def register(request):
    if request.method == 'POST':
        inp_data = JSONParser().parse(request)
        print(inp_data)
        teacher_serializer = TeacherSerializer(data=inp_data)
        if teacher_serializer.is_valid():
            print('valid')
            teacher_serializer.save()
            return JsonResponse(teacher_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(teacher_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    #return Response({'message': 'Register'})

@api_view(['POST'])
def login(request):
    if request.method == 'POST':
        inp_data = JSONParser().parse(request)
        email = inp_data['email']
        password = inp_data['password']

        print(password)

        user = Teacher.objects.get(email=email)
        if user.password == password:
            serializer = TeacherSerializer(user)
           
            return JsonResponse({'message':'LoggedIn','data':serializer.data})
        elif user.password != password:
            return JsonResponse({'message':'Incorrect Username/Password Combination'})
    
@api_view(['POST'])
def add_exam(request):
    if request.method == 'POST':
        inp_data = JSONParser().parse(request)
        print(inp_data)
        exam_serializer = ExamSerializer(data=inp_data)
        if exam_serializer.is_valid():
            print('valid')
            exam_serializer.save()
            return JsonResponse(exam_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(exam_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_exam(request):
    if request.method == 'GET':
        opt_data = Exam.objects.all()
        # objectQuerySet = Exam.objects.filter()
        print(opt_data)    
        serializer = ExamSerializer(data=opt_data,many=True)
        if serializer.is_valid(raise_exception=False):
            return Response(serializer.data,status=status.HTTP_200_OK)
        else:
            print(serializer.errors)
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)