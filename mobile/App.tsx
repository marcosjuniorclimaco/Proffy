import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './src/pages/Landing';
import {AppLoading} from 'expo';

import {Archivo_400Regular, Archivo_700Bold, useFonts} from '@expo-google-fonts/archivo';
import AppStack from './src/routes/AppStack';


export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
   
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <AppStack />
        <StatusBar style="light" />
  
      </>
    );
  }

}


