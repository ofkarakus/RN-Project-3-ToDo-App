import {StyleSheet} from 'react-native'

const main = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#37474F',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 10,
  },
  heading: {
    color: '#FBA730',
    fontWeight: 'bold',
    fontSize: 35,
  },
  counter: {
    color: '#FBA730',
    fontSize: 30,
  },

  main: {
    flex: 1,
    alignItems: 'center',
  },
  empty: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 16
  }
})


export {main};