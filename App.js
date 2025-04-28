import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState}  from 'react';

export default function App() {
  const [count, setContador] = useState(0);
  const contar = () => setContador(count + 1)
  return (
    <View style={styles.container}>
      <Text>Apretaste el boton {count} veces.</Text>
      <button onClick={ contar()}>Clickeame</button>
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
