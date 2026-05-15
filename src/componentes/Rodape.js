import { Text, View } from 'react-native';

import SimboloBandeiras from './SimboloBandeiras';
import estilos from '../styleSheet/estilos';

export default function Rodape() {
  return (
    <View style={estilos.rodape}>
      <SimboloBandeiras />
      <Text style={estilos.rodapeTexto}>Fonte visual inspirada no IBGE Países</Text>
    </View>
  );
}
