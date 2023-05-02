/*
* File: App.js
* Author: Zentai Pál
* Copyright: 2023, Zentai Pál
* Group: Szoft-II-N
* Date: 2023-05-02
* Github: https://github.com/Pali002/
* Licenc: GNU GPL
*/

import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [bikes, setBikes] = useState([]);
  function getBikes() {
    let host = 'http://localhost:8000/';
    let endpoint = 'bikes';
    let url = host + endpoint;
    
    fetch(url).then(response => response.json())
    .then(result => {
      setBikes(result)
    });
  }

  useEffect(() => {
    getBikes();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Gepida</Text>
      <Text>05-02 dolgozat</Text>

      <FlatList
      data={bikes}
      renderItem={ ({item}) => (
        <Text>{item.name}</Text>
      )}
      />

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
