from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListCreateAPIView
from rest_framework.serializers import ModelSerializer

from .models import Task


class TasksSerializer(ModelSerializer):

    class Meta:
        model = Task
        fields = '__all__'


class Tasks(RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TasksSerializer


class TasksListCreate(ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TasksSerializer

