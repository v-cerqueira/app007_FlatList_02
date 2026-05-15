import { Text, View } from 'react-native';

import SimboloBandeiras from './SimboloBandeiras';
import estilos from '../styleSheet/estilos';

export default function Cabecalho() {
  return (
    <View style={estilos.cabecalho}>
      <SimboloBandeiras />
      <Text style={estilos.titulo}>Países</Text>
      <Text style={estilos.subtitulo}>Capitais do mundo em uma FlatList</Text>
    </View>
  );
}
