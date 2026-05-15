import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

import Conteudo from './src/componentes/Conteudo';
import estilos from './src/styleSheet/estilos';

export default function App() {
  return (
    <SafeAreaView style={estilos.container}>
      <StatusBar style="dark" />
      <Conteudo />
    </SafeAreaView>
  );
}
