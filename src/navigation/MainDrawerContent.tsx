import {
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';

const navigationItems = [
  {
    title: 'Calculator',
    data: [
      'Standard',
      'Scientific',
      'Graphing',
      'Programmer',
      'DateCalculation',
    ],
  },
  {
    title: 'Converter',
    data: ['Currency', 'Volume', 'Length'],
  },
];

export const MainDrawerContent = ({navigation}) => {
  const Item = ({title}) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate(title)}>
      <Text style={styles.itemText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <DrawerContentScrollView>
      <SectionList
        sections={navigationItems}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Item title={item} />}
        renderSectionHeader={({section: {title}}) => (
          <View style={styles.groupTitleContainer}>
            <Text style={styles.groupTitleText}>{title}</Text>
          </View>
        )}
        style={styles.container}
      />
      <View style={styles.separator} />
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => navigation.navigate('Settings')}>
        <Text style={styles.itemText}>Settings</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {marginLeft: 20},
  groupTitleContainer: {marginVertical: 20},
  groupTitleText: {fontWeight: 'bold'},
  itemContainer: {height: 40, marginLeft: 25},
  itemText: {},
  separator: {
    backgroundColor: 'grey',
    width: '100%',
    height: 0.5,
    opacity: 0.5,
    borderStyle: 'solid',
    marginBottom: 15,
  },
});
