import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState}  from 'react';
import { Button } from 'react-native-web';

export default function App() {
  const [color, setColor] = useState("#ffffff");
  const [count, setContador] = useState(0);

  const cambiarColor = () => {
    if (color === "#ffffff") {
      setColor("#ff0000");
    } else if (color === "#ff0000") {
      setColor("#00ff00");
    } else if (color === "#00ff00"){
      setColor("#0000ff");
    } else if (color === "#0000ff"){
      setColor("#000");
    } else {
      setColor("#ffffff");
    }
  };
  const contar = () => setContador(count + 1)
  return (
    <View style={[styles.container, {background: color}]}>
      <StatusBar style="auto" />
      <Text>Apretaste el boton {count} veces.</Text>
      <Button title = "Clickeame" onPress={() => {cambiarColor();contar();}}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
