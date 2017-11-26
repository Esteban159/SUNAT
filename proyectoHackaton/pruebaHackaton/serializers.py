from pruebaHackaton.models import Person,Usuario
from rest_framework import serializers

class PersonSerializer(serializers.ModelSerializer):
	"""docstring for PersonSerializer"""
	class Meta:
		model=Person
		fields= '__all__'

class UsuarioSerializer(serializers.ModelSerializer):
	"""docstring for PersonSerializer"""
	class Meta:
		model=Usuario
		fields= '__all__'

