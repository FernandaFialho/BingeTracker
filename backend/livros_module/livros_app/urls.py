from django.urls import path
from .views import (LivroCreateAPIView,LivroDeleteAPIView,LivroListAPIView,LivroUpdateAPIView,LivroListFromUserAPIView)

urlpatterns = [
    path('getLivros',LivroListAPIView.as_view(), name='listagem'),
    path('getLivrosFromUser/<str:user_id>',LivroListFromUserAPIView.as_view(), name='listagemuser'),
    path('postLivros/',LivroCreateAPIView.as_view(), name='envio'),
    path('putLivros/<str:id>/',LivroUpdateAPIView.as_view(), name='atualizar'),
    path('deleteLivros/<str:id>/',LivroDeleteAPIView.as_view(), name='deletar'),
]