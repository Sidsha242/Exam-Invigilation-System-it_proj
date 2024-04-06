from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.register, name='register'),  #register user
    path('login/', views.login, name='login'),           #logiin user
    path('add_exam/', views.add_exam, name='add_exam'),  #admin can add exam
    path('get_exam/',views.get_exam, name='get_exam'),   #teacher can see all exams
    path('add_invj/',views.add_invj, name='add_invj'),   #teacher can inv for a particular exam
    path('get_myexam/<str:mahe_id>/',views.get_myexam,name='get_myexam'),  #get all exam a teacher is invigilating
    path('delete_exam/<str:subjCode>/',views.delete_exam,name='delete_exam'),  #get all exam a teacher is invigilating
    path('leave_invj/',views.leave_invj,name='leave_invj')  #teachers can leave invigilation duty
]