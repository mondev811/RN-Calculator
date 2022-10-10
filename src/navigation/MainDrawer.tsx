import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  StandardScreen,
  ScientificScreen,
  ProgrammerScreen,
  GraphingScreen,
  DateCalculationScreen,
  ConverterBase,
  Settings,
} from '../screens';
import {MainDrawerContent} from './MainDrawerContent';

const Drawer = createDrawerNavigator();

export const MainDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Standard"
      drawerContent={props => <MainDrawerContent {...props} />}>
      <Drawer.Screen name="Standard" component={StandardScreen} />
      <Drawer.Screen name="Scientific" component={ScientificScreen} />
      <Drawer.Screen name="Programmer" component={ProgrammerScreen} />
      <Drawer.Screen name="Graphing" component={GraphingScreen} />
      <Drawer.Screen name="DateCalculation" component={DateCalculationScreen} />
      <Drawer.Screen name="ConverterBase" component={ConverterBase} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};
