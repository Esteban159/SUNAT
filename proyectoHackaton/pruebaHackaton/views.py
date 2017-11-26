from django.shortcuts import render
from pruebaHackaton.models import Person,Usuario
from pruebaHackaton.serializers import PersonSerializer, UsuarioSerializer
from django.http import HttpResponse
from rest_framework import generics
import json

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.utils.six import BytesIO
from rest_framework.parsers import JSONParser

#from lxml import etree

# Create your views here.
def index(request):
	return	HttpResponse('<p>hola</p>')

class PersonList(generics.ListCreateAPIView):
	queryset=Person.objects.filter(id=1)
	serializer_class=PersonSerializer



@api_view(['GET', 'POST'])
def person_list(request):
    
    if request.method == 'GET':
        
        person = Person.objects.all()
        serializer = PersonSerializer(person, many=True)
        
        return Response(serializer.data)
    else:
        if request.method == 'POST':
            print(request.POST.get('data'))
            serializer = PersonSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'POST'])
def usuarioValidacion(request):
    print("hola que kaces")
    if request.method == 'GET':
        usuario = Usuario.objects.all()
        serializer = UsuarioSerializer(usuario, many=True)      
        return Response(serializer.data)
    else:
        if request.method == 'POST':
            stream = BytesIO(request.data)
            print(stream)
            data = JSONParser().parse(stream)
            print(data)
            serializer = UsuarioSerializer(data=data)
            print(serializer)
            serializer.is_valid()
            serializer.validated_data
        
           

