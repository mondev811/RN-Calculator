import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

type NavigationItem = {
  title: string;
  screen: string;
  icon: string;
};

type NavigationData = {
  group: string;
  items: Array<NavigationItem>;
};

type ItemListHeaderProps = {
  title: string;
};

type ItemProps = {
  item: NavigationItem;
  drawerContentProps: DrawerContentComponentProps;
};

const Data: Array<NavigationData> = [
  {
    group: 'Calculator',
    items: [
      {title: 'Standard', screen: 'Standard', icon: 'calculator-outline'},
      {title: 'Scientific', screen: 'Scientific', icon: 'flask-outline'},
      {title: 'Graphing', screen: 'Graphing', icon: 'bar-chart-outline'},
      {title: 'Programmer', screen: 'Programmer', icon: 'code-slash-outline'},
      {
        title: 'Date Calculation',
        screen: 'DateCalculation',
        icon: 'calendar-outline',
      },
    ],
  },
  {
    group: 'Converter',
    items: [
      {title: 'Currency', screen: 'ConverterBase', icon: 'cash-outline'},
      {title: 'Volume', screen: 'ConverterBase', icon: 'cube-outline'},
      {title: 'Length', screen: 'ConverterBase', icon: 'barcode-outline'},
    ],
  },
  {
    group: '',
    items: [{title: 'Settings', screen: 'Settings', icon: 'settings-outline'}],
  },
];

const Item = ({item, drawerContentProps}: ItemProps) => (
  <TouchableOpacity
    style={styles.itemContainer}
    onPress={() => drawerContentProps.navigation.navigate(item.screen)}>
    <Icon name={item.icon} size={18} color="grey" />
    <Text style={styles.itemText}>{item.title}</Text>
  </TouchableOpacity>
);

const ItemListHeader = ({title}: ItemListHeaderProps) => (
  <View style={styles.groupTitleContainer}>
    <Text style={styles.groupTitleText}>{title}</Text>
  </View>
);

export const MainDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {Data.map(x => (
        <View style={styles.container} key={x.group}>
          {x.group && <ItemListHeader title={x.group} />}
          {!x.group && <View style={styles.separator} />}
          {x.items.map(t => (
            <Item
              item={t}
              drawerContentProps={props}
              key={x.group + '_' + t.title}
            />
          ))}
        </View>
      ))}
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {marginLeft: 20},
  groupTitleContainer: {marginVertical: 20},
  groupTitleText: {fontWeight: 'bold'},
  itemContainer: {flexDirection: 'row', height: 40, marginLeft: 5},
  itemText: {marginLeft: 10},
  separator: {
    backgroundColor: 'grey',
    width: '100%',
    height: 0.5,
    opacity: 0.5,
    borderStyle: 'solid',
    marginBottom: 15,
  },
});
