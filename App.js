import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View>
        <TextInput style={styles.textInput} placeholder="User Name" />
      </View>
      <View>
        <TextInput style={styles.textInput} placeholder="Password" />
      </View>
      <View style={styles.button}>
        <Button title="Login" />
      </View>
      <View style={styles.textBox}>
        <Text style={styles.text}>Forget Password?</Text>
        <Text style={styles.text}>Register?</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  textInput: {
    padding: 15,
    height: 60,
    width: 350,
    fontSize: 20,
    borderWidth: 1,
    marginBottom: 20,
    color: 'black',
  },
  label: {
    fontSize: 20,
  },
  title: {
    color: 'black',
    fontSize: 50,
    margin: 60,
  },
  button: {
    width: 350,
    fontSize: 50,
    height: 60,
  },
  textBox: {
    marginTop: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 17,
    color: "#06bcee",
    marginBottom: 20,
  }
});
