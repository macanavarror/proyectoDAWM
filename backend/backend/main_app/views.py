from django.contrib.auth.models import User, Group
from django.db.models import Q
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.views import APIView

from main_app.models import Noticia, Mensaje
from main_app.serializers import UserSerializer, GroupSerializer, NoticiaSerializer, MensajeSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    # permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    # permission_classes = [permissions.IsAuthenticated]

class MensajeViewset(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Mensaje.objects.all()
    serializer_class = MensajeSerializer
    # permission_classes = [permissions.IsAuthenticated]

    @action(methods=['get'], url_path='obtener', detail=False)
    def obtener_mensajes(self, request):
        queryset = Mensaje.objects.all()
        return Response(MensajeSerializer(queryset, many=True).data)

    @action(methods=['post'], url_path='publicar', detail=False)
    def publicar_mensaje(self, request):
        formulario = request.data.get('formulario')
        mensaje = Mensaje(nombre = formulario.get('nombre'), apellido = formulario.get('apellido'), pais = formulario.get('pais'), correo = formulario.get('correo'), detalle = formulario.get('detalle'))
        mensaje.save()
        return Response({'status': 'success'})

class NoticiaViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Noticia.objects.all()
    serializer_class = NoticiaSerializer
    # permission_classes = [permissions.IsAuthenticated]

    @action(methods=['get'], url_path='obtener', detail=False)
    def obtener_noticias(self, request):
        queryset = Noticia.objects.all()
        if request.GET.get('query'):
            query = request.GET.get('query')
            queryset = queryset.filter(Q(titulo__icontains=query) |Q(contenido__icontains=query))
        return Response(NoticiaSerializer(queryset, many=True).data)


    @action(methods=['post'], url_path='eliminar', detail=False)
    def eliminar_noticia(self, request):
        id = request.data.get('noticia_id')
        noticia = Noticia.objects.get(pk=id)
        noticia.delete()
        noticias = Noticia.objects.all()
        return Response(NoticiaSerializer(noticias, many=True).data)

    @action(methods=['post'], url_path='publicar', detail=False)
    def publicar_noticia(self, request):
        id = request.data.get('id')
        if(id!=0):
            noticia = Noticia.objects.get(pk=id)
            noticia.titulo = request.data.get('titulo')
            noticia.contenido = request.data.get('contenido')
            noticia.imagen = request.data.get('imagen')
            noticia.save()
        else:
            noticia = Noticia(titulo = request.data.get('titulo'), contenido = request.data.get('contenido'), imagen = request.data.get('imagen'))
            noticia.save()
        return Response({'status': 'success'})


class CustomAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk,
            'email': user.email,
            'username':user.username
        })

class AdministradorDashboard(APIView):

    def get(self, request):
        return Response({
            'noticias': NoticiaSerializer(Noticia.objects.all(), many=True).data
        })