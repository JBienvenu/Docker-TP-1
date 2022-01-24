from rest_framework import routers
from . import views

router = routers.DefaultRouter()

router.register("", views.ArticlesViewset, basename="articles")
urlpatterns = router.urls
