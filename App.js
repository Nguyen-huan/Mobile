import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
export default function App() {
  let a = require('./assets/adaptive-icon.png');


  return (
    MyStack(),
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
        <Text style={styles.text} onPress={MyStack}>Forget Password?</Text>
        <Text style={styles.text}>Register?</Text>
      </View>
      {/* <Image
        blurRadius={0}
        fadeDuration={4000}
        source={{
          uri: "https://picsum.photos/200",
          height: 100, width: 100
        }} />
      <Image style={styles.image_1}
        source={1}
      /> */}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
    color: 'black',
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
  },
  image_1: {
    height: 100,
    width: 100
  }
});
