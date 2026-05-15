import { Alert, FlatList, Image, Linking, Pressable, Text, View } from 'react-native';

import Cabecalho from './Cabecalho';
import Rodape from './Rodape';
import paises from '../dados/paises.json';
import estilos from '../styleSheet/estilos';

function abrirLink(url) {
  Linking.openURL(url).catch(() => {
    Alert.alert('Aviso', 'Nao foi possivel abrir o link deste pais.');
  });
}

function mostrarItem({ item }) {
  return (
    <Pressable style={estilos.card} onPress={() => abrirLink(item.link)}>
      <View style={estilos.cardTopo}>
        <View style={estilos.textosItem}>
          <Text style={estilos.nomePais}>{item.pais}</Text>
          <Text style={estilos.nomeCapital}>Capital: {item.capital}</Text>
        </View>
        <Image source={{ uri: item.bandeira }} style={estilos.bandeiraItem} />
      </View>
    </Pressable>
  );
}

function mostrarSeparador() {
  return <View style={estilos.separador} />;
}

function mostrarCabecalho() {
  return <Cabecalho />;
}

function mostrarRodape() {
  return <Rodape />;
}

function recuperarId(item) {
  return item.id;
}

export default function Conteudo() {
  return (
    <FlatList
      style={estilos.lista}
      contentContainerStyle={estilos.listaConteudo}
      data={paises}
      keyExtractor={recuperarId}
      renderItem={mostrarItem}
      ItemSeparatorComponent={mostrarSeparador}
      ListHeaderComponent={mostrarCabecalho}
      ListFooterComponent={mostrarRodape}
      showsVerticalScrollIndicator={false}
    />
  );
}
