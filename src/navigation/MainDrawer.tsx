import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  ConverterBase,
  DateCalculationScreen,
  GraphingScreen,
  ProgrammerScreen,
  ScientificScreen,
  Settings,
  StandardScreen,
} from '../screens';
import {MainDrawerContent} from './MainDrawerContent';
import {Measures} from '../screens/converter/units';

export type RootDrawerParamList = {
  Standard: undefined;
  Scientific: undefined;
  Programmer: undefined;
  Graphing: undefined;
  DateCalculation: undefined;
  ConverterBase: {measure: keyof typeof Measures};
  Settings: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

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
      <Drawer.Screen
        name="ConverterBase"
        component={ConverterBase}
        initialParams={{measure: 'Currency'}}
      />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};
