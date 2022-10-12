import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainDrawer} from './src/navigation/MainDrawer';
import ConverterActionSheet from './src/screens/converter/ConverterActionSheet';
import {registerSheet, SheetProvider} from 'react-native-actions-sheet';
registerSheet('converter-picker', ConverterActionSheet);
const App = () => {
  return (
    <SheetProvider>
      <NavigationContainer>
        <MainDrawer />
      </NavigationContainer>
    </SheetProvider>
  );
};

export default App;
