import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
  
  const [text, changeText] = useState('Open up App.js to start working on your app!')


  
  return (
    <View style={styles.homeScreen}>
      <View style ={{flexDirection: 'row', justifyContent: 'space-between', alignIems: 'center'}}>
        <TextInput placeholder="Write down your goal" style={{ width: 250, borderColor: 'black', borderWidth: 2}}/>
        <Button title='submit'/>
     </View>
     <View>

     </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  homeScreen: {
    padding: 50
  },
});
