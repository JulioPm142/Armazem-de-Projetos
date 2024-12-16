import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import CadastroUsuario from '../pages/CadastroUsuario';
import Busca from '../pages/BuscaPoligono/Busca';
import VisualizarEditarPerfil from '../pages/VisualizarEditarPerfil';
import DetalhesImagem from '../pages/DetalhesImagens/DetalhesImagens';
import BuscaCidade from '../pages/BuscaCidade';
import Historico from '../pages/Historico/Historico';

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Login: undefined;
  CadastroUsuario: undefined;
  Busca: undefined;
  VisualizarEditarPerfil: undefined;
  DetalhesImagem: undefined;
  BuscaCidade: {
    estado: string;
    cidade: string;
    boundingbox: {
      norte: number;
      sul: number;
      leste: number;
      oeste: number;
    };
  };
  Historico: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
      />
      <Stack.Screen
        name="CadastroUsuario"
        component={CadastroUsuario}
        options={{ headerShown: true, title: 'Cadastre sua conta' }}
      />
      <Stack.Screen
        name="Busca"
        component={Busca}
        options={{ headerShown: true, title: 'Desenhar pontos' }}
      />
      <Stack.Screen
        name="VisualizarEditarPerfil"
        component={VisualizarEditarPerfil}
        options={{ headerShown: true, title: 'Perfil' }}
      />
      <Stack.Screen
        name="DetalhesImagem"
        component={DetalhesImagem}
        options={{ headerShown: true, title: 'Detalhes da Imagem' }}
      />
      <Stack.Screen
        name="BuscaCidade"
        component={BuscaCidade}
        options={{ headerShown: true, title: 'Buscar cidades'  }}
      />
      <Stack.Screen
        name="Historico"
        component={Historico}
        options={{ headerShown: true, title: 'Histórico'  }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;