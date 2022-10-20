import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch } from 'react-native';
import react, { useState } from 'react';
import { MyColor } from './src/styles/Color';
import { Themecontext } from './src/context/Themecontext';
import Button from './src/cn/Button';
import { Keyboard } from 'react-native';
import MyKeyboard from './src/cn/Keyboard';

export default function App() {

  const [Theme, setTheme] = useState('light')
  return (
    <Themecontext.Provider value={Theme}>
      <View style={Theme === 'light' ? styles.container : [styles.container, { backgroundColor: '#000' }]}>
        
        <StatusBar style="auto" />
        <Switch
          value={Theme === 'dark'}
          onValueChange={() => setTheme(Theme === 'dark' ? 'light' : 'dark')} />
        <MyKeyboard />
        
      </View>

      
    </Themecontext.Provider>

  );


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    flex:1,
    color: 'green',
    justifyContent: 'flex-end',
    fontSize: 20
  },

});


