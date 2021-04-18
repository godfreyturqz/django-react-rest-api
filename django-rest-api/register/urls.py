from rest_framework import routers
from .views import RegisterViewSet

router = routers.DefaultRouter()
router.register('', RegisterViewSet, 'register')

urlpatterns = router.urls