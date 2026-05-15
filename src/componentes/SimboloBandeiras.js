import { Image, View } from 'react-native';

import estilos from '../styleSheet/estilos';

const bandeiras = [
  'https://paises.ibge.gov.br/img/bandeiras/SE.gif',
  'https://paises.ibge.gov.br/img/bandeiras/GB.gif',
  'https://paises.ibge.gov.br/img/bandeiras/PT.gif',
  'https://paises.ibge.gov.br/img/bandeiras/NL.gif',
];

export default function SimboloBandeiras() {
  return (
    <View style={estilos.bandeirasGrupo}>
      {bandeiras.map((bandeira) => (
        <Image
          key={bandeira}
          source={{ uri: bandeira }}
          style={estilos.bandeiraTopo}
        />
      ))}
    </View>
  );
}
