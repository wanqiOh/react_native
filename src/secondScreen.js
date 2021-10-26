import React, { useState, useEffect } from 'react'
import { StyleSheet, SafeAreaView, Text, View } from 'react-native'


export default function secondScreen({ route, navigation }) {
  const { API, city } = route.params;

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  console.log(data);

  useEffect(() => {
    fetch('http://api.weatherapi.com/v1/current.json?key=' + encodeURI(API) + '&q=' + encodeURI(city))
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading && data == null ? <Text>Loading...</Text> :
        (
          <View>
            <Text style={styles.text}>Celsius</Text>
            <Text style={styles.blacktext}>{(data.current.temp_c).toFixed(1)}</Text>
            <Text style={styles.text}>Fahrenheit</Text>
            <Text style={styles.blacktext}>{(data.current.temp_f).toFixed(1)}</Text>
          </View>
        )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    justifyContent: 'center',
  },
  text: {
    paddingVertical: 10,
    fontSize: 15,
    color: '#ff0000',
  },
});
