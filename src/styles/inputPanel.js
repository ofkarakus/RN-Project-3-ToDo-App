import {StyleSheet, Dimensions} from 'react-native'

const inputPanel = StyleSheet.create({
  footer: {
    backgroundColor: '#B0BEC5',
    marginHorizontal: 10,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height / 5,
    marginBottom: 25,
  },
  input: {
    backgroundColor: '#FFFFFF',
    width: '85%',
    height: '32%',
    borderRadius: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#37474F',
    width: '50%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  btnText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  }
})

export {inputPanel}