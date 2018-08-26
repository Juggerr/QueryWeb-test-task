from django.urls import path, re_path
from django.views.generic import TemplateView

from tasks.views import Tasks, TasksListCreate

urlpatterns = [
    path('tasks/', TasksListCreate.as_view(), name='tasks'),
    path('tasks/<int:pk>', Tasks.as_view(), name='tasks-edit'),
    re_path(r'^.*$', TemplateView.as_view(template_name="index.html")),
]
