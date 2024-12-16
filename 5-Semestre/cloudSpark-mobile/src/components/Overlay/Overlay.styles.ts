import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 30,
  },
  alignBottom: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  botao: {
    width: width * 0.15,
    height: width * 0.15,
    backgroundColor: '#fff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#0004',
    paddingBottom: 5,
    marginTop: 10,
  },
  overlay: {
    marginTop: height * 0.007,
    width: 'auto',
    height: 'auto',
    borderRadius: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#0004',
  },
  grid: {
    padding: 20,
    width: width * 0.9,
    flexDirection: 'column',
    gap: height * 0.03,
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  botaoGenerico: {
    width: width * 0.2,
    height: width * 0.2,
    backgroundColor: '#FFD700',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#0007',
    paddingBottom: 5,
    marginLeft: 25,
  },
  BotaoDesc: {
    marginTop: 5,
    maxWidth: width * 2,
    textAlign: 'center',
    flexWrap: 'wrap',
  },
  customButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  botaoFechar: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ff5c5c',
    borderRadius: 5,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
