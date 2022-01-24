from rest_framework.serializers import ModelSerializer, ALL_FIELDS
from articles.models import Article


class ArticleResponseSerializer(ModelSerializer):
    class Meta:
        model = Article
        fields = ALL_FIELDS
