from django.shortcuts import render
from django.http import HttpResponse

def student(request):
    return HttpResponse("<h1> welcome to MBA page</h1>")
    
