from rest_framework import routers
from .views import RfiViewSet

router = routers.DefaultRouter()
router.register('', RfiViewSet, 'rfi')

urlpatterns = router.urls