import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ActionSheet, {
  SheetManager,
  SheetProps,
} from 'react-native-actions-sheet';
import {Measures} from '../converter/units';

const ConverterActionSheet = (
  props: SheetProps<{measure: string; selected: string}>,
) => {
  const list = Measures[props.payload?.measure] as Array<string>;
  const selected = props.payload?.selected as string;
  const [selectedItem, setSelectedItem] = useState(selected);

  return (
    <ActionSheet id={props.sheetId}>
      <ScrollView style={styles.container}>
        {list.map(item => (
          <TouchableOpacity
            onPress={() => {
              setSelectedItem(item);
              SheetManager.hide(props.sheetId, {payload: item});
            }}>
            {selectedItem === item && (
              <Text style={{...styles.text, ...styles.selected}}>{item}</Text>
            )}
            {selectedItem !== item && <Text style={styles.text}>{item}</Text>}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ActionSheet>
  );
};

export default ConverterActionSheet;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
    marginVertical: 5,
    alignSelf: 'center',
  },
  selected: {
    fontWeight: 'bold',
  },
});
