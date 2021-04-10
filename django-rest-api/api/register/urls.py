from rest_framework import routers
from .views import NameViewSet

router = routers.DefaultRouter()
router.register('', NameViewSet, 'name')

urlpatterns = router.urls