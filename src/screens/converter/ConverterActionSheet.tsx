import {Text, View} from 'react-native';
import React from 'react';
import ActionSheet, {SheetProps} from 'react-native-actions-sheet';
import {Measures} from '../converter/units';

const ConverterActionSheet = (
  props: SheetProps<{measure: string; selected: string}>,
) => {
  const list = Measures[props.payload?.measure] as Array<string>;
  return (
    <ActionSheet id={props.sheetId}>
      <View>
        {list.map(item => (
          <Text>{item}</Text>
        ))}
      </View>
    </ActionSheet>
  );
};

export default ConverterActionSheet;
