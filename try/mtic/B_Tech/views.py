from django.shortcuts import render

from django.http import HttpResponse

def student(request):
    return HttpResponse("<h1>welcome to B_Tech</h1>")
