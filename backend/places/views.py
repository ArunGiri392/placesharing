from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def place_list(request):
    data = [
        {"id": 1, "name": "Place 1", "description": "Description of Place 1"},
        {"id": 2, "name": "Place 2", "description": "Description of Place 2"}
    ]
    return Response(data)

@api_view(['GET'])
def place_detail(request, pk):
    data = {"id": pk, "name": f"Place {pk}", "description": f"Description of Place {pk}"}
    return Response(data)
