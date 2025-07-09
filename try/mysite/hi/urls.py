from django.urls import path
from.import views
urlpatterns=[path('me/',views.me,name='me'),
             path('mine/',views.mine,name='mine'),
             path('check/',views.check,name='check'),
             path('form/',views.form,name='form'),
             path('call/',views.call,name='call'),]
