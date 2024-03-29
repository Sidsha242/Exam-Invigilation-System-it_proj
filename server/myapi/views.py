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


@api_view(['POST'])
def login(request):
    if request.method == 'POST':
        inp_data = JSONParser().parse(request)
        mahe_id = inp_data['mahe_id']
        password = inp_data['password']

        print(password)

        user = Teacher.objects.get(mahe_id=mahe_id)
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
        exams = Exam.objects.all()
        exam_serializer = ExamSerializer(exams, many=True)
        return JsonResponse(exam_serializer.data, safe=False)
    

@api_view(['PUT'])
def add_invj(request):
    if request.method == 'PUT':
        inp_data = JSONParser().parse(request)
        mahe_id = inp_data['mahe_id']
        subj_Code = inp_data['subjCode']
        print(mahe_id)
        print(subj_Code)
        exam = Exam.objects.filter(subjCode=subj_Code).update(mahe_id=mahe_id)

        return Response(status=status.HTTP_200_OK)