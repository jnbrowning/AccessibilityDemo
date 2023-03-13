import { StyleSheet } from "react-native";

// make sure to check color contrast
// https://webaim.org/resources/contrastchecker/

const styles = StyleSheet.create({

  //GENERAL STYLES
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: '20%',
  },
  heading: {
    fontSize: 20,
    padding: '3%',
    backgroundColor: '#03ee32',
    width: '100%',
    textAlign: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: '30',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  button: {
    height: '10%',
    width: '60%',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: '20%',
    margin: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20
  },
  backButton: {
    flexDirection: 'row',
    width: '100%',
    marginLeft: '3%',
    padding: '3%'
  },
  inputPair: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 2,
    margin: 3,
    width: '35%',
  },
  inputError: {
    borderColor: 'red',
    borderWidth: 4,
    padding: 2,
    margin: 3,
    width: '35%',
  },
  inputStar: {
    fontSize: 20,
    color: 'black',
  },
  starError: {
    fontSize: 30,
    color: 'red'
  },
  infographic: {
    height: '50%',
    width: '70%'
  }
});

export default styles;