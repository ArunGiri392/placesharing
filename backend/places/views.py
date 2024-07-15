from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Place
from .serializers import PlaceSerializer

@api_view(['GET'])
def get_place_by_id(request, pid):
    try:
        place = Place.objects.get(id=pid)
    except Place.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = PlaceSerializer(place)
    return Response(serializer.data)

@api_view(['GET'])
def get_places_by_user_id(request, uid):
    places = Place.objects.filter(creator_id=uid)
    serializer = PlaceSerializer(places, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_place(request):
    serializer = PlaceSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PATCH'])
def update_place(request, pid):
    try:
        place = Place.objects.get(id=pid)
    except Place.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = PlaceSerializer(place, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_place(request, pid):
    try:
        place = Place.objects.get(id=pid)
    except Place.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    place.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
