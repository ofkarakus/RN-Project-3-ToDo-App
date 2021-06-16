import {StyleSheet, Dimensions} from 'react-native';

const todoCard = StyleSheet.create({
  container: {
    backgroundColor: '#546E7A',
    width: Dimensions.get('window').width * 0.9,
    height: 40,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 5,
    flexDirection: 'row',
  },
  info: {
    flex: 1,
  },
  todo: {
    color: 'white',
    marginHorizontal: 10,
    fontSize: 17,
  },
  time: {
    fontSize: 10,
    textAlign: 'right',
    color: '#FBA730',
  },
  delBtnText: {
    color: '#e53935',
    fontWeight: 'bold',
    paddingHorizontal: 10,
    fontSize: 17,
  },
  delIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 5,
  },
});

export {todoCard};
