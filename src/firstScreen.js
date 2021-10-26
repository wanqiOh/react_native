import DropDownPicker from 'react-native-dropdown-picker';
import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Button, TextInput, View } from 'react-native';

export default function firstScreen({ navigation }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Kuala Lumpur', value: 'Kuala Lumpur' },
    { label: 'Singapore', value: 'Singapore' }
  ]);
  const [apiKey, setAPIKey] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Your API Key</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Your API Key"
        onChangeText={text => setAPIKey(text)}
        defaultValue={apiKey} />
      <Text style={styles.text}>City Name</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems} />
      <View style={styles.button}>
        <Button color='#ff0000' title="Submit" onPress={() => navigation.navigate('second', { API: apiKey, city: value })} />
      </View>
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
    padding: 10,
    fontSize: 15,
    color: '#ff0000',
  },

  textInput: {
    padding: 10,
  },

  button: {
    marginTop: 100,
  },
});
