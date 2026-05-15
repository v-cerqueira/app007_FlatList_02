import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  lista: {
    flex: 1,
  },
  listaConteudo: {
    padding: 8,
  },
  cabecalho: {
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    borderColor: '#d8d8d8',
    borderRadius: 14,
    borderWidth: 1,
    marginBottom: 8,
    paddingBottom: 14,
    paddingTop: 14,
  },
  rodape: {
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    borderColor: '#d8d8d8',
    borderRadius: 14,
    borderWidth: 1,
    marginTop: 8,
    paddingBottom: 14,
    paddingTop: 14,
  },
  bandeirasGrupo: {
    flexDirection: 'row',
    gap: 2,
    marginBottom: 10,
  },
  bandeiraTopo: {
    borderRadius: 2,
    height: 16,
    width: 28,
  },
  titulo: {
    color: '#111111',
    fontSize: 24,
    fontWeight: '700',
  },
  subtitulo: {
    color: '#6d6d6d',
    fontSize: 12,
    marginTop: 2,
  },
  card: {
    backgroundColor: '#a8c7e5',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  cardTopo: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textosItem: {
    flex: 1,
    paddingRight: 10,
  },
  nomePais: {
    color: '#101010',
    fontSize: 18,
    fontWeight: '700',
  },
  nomeCapital: {
    color: '#5c6d7c',
    fontSize: 13,
    marginTop: 6,
  },
  bandeiraItem: {
    borderRadius: 4,
    height: 32,
    width: 48,
  },
  separador: {
    height: 8,
  },
  rodapeTexto: {
    color: '#5c6d7c',
    fontSize: 12,
    marginTop: 4,
  },
});

export default estilos;
