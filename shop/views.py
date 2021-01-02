from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer
from rest_framework import generics


class CategoryListCreate(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
