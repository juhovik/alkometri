import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 50,
    textAlign: 'center',
    marginBottom: 15,
    color: 'skyblue',
    flexDirection: 'row',
    fontWeight: 'bold',
    fontSize: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
    marginLeft: 5
  },
  result: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    margin: 20,
  },
  button: {
    margin: 30,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#73CED6",
    width: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color:"#2B2B52",
    fontSize: 20
  },
});