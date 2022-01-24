from rest_framework import viewsets
from rest_framework.status import HTTP_200_OK
from rest_framework.response import Response
from articles.models import Article
from articles.serializers import ArticleResponseSerializer


class ArticlesViewset(viewsets.ViewSet):
    def list(self, request):
        queryset = Article.objects.all()
        serializer = ArticleResponseSerializer(queryset, many=True)
        return Response(serializer.data, status=HTTP_200_OK)

    def create(self, request):
        pass

    def retrieve(self, request, pk=None):
        pass

    def update(self, request, pk=None):
        pass

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass
