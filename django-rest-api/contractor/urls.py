from rest_framework import routers
from .views import ContractorViewSet

router = routers.DefaultRouter()
router.register('', ContractorViewSet, 'contractor')

urlpatterns = router.urls