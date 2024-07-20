from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login as auth_login
from .serializers import UserSerializer, LoginSerializer
from .models import CustomUser

@api_view(['GET'])
def get_users(request):
    print("API CALLED.")
    users = CustomUser.objects.all()
    print("The users are" , users)
    serializer = UserSerializer(users, many=True)
    print("The serializers are" , serializer)
    return Response(serializer.data)

@api_view(['POST'])
def signup(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response({"message": "User already exists", "errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def login(request):
    serializer = LoginSerializer(data=request.data)
    if serializer.is_valid():
        email = serializer.validated_data['email']
        password = serializer.validated_data['password']
        user = authenticate(request, email=email, password=password)
        if user is not None:
            auth_login(request, user)
            user_data = UserSerializer(user).data
            return Response({"message": "Login successful", "user": user_data}, status=status.HTTP_200_OK)
        return Response({"message": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)