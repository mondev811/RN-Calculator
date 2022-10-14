import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from '../../theme/globalStyles';
import {StyledButton} from '../../components/StyledButton';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {RootDrawerParamList} from '../../navigation/MainDrawer';
import {Measures, Multipliers} from '../converter/units';
import {SheetManager} from 'react-native-actions-sheet';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = DrawerScreenProps<RootDrawerParamList, 'ConverterBase'>;
type DropDownProps = {
  type: 'input1' | 'input2';
};

const ConverterBase = ({route, navigation}: Props) => {
  const measure = route.params.measure;
  const initSelected1 = Measures[measure][3];
  const initSelected2 = Measures[measure][0];
  const [selected1, setSelected1] = useState(initSelected1);
  const [selected2, setSelected2] = useState(initSelected2);
  const [output, setOutputStr] = useState('0');
  const [inputStr, setInputStr] = useState('0');

  useEffect(() => {
    navigation.setOptions({title: measure});
    setSelected1(initSelected1);
    setSelected2(initSelected2);
    setInputStr('0');
    setOutputStr('0');
  }, [measure]);

  useEffect(() => {
    const inputMultiplier = Multipliers[measure][selected1];
    const outputMultiplier = Multipliers[measure][selected2];
    let valueFloat = parseFloat(inputStr);
    const outputFloat = (valueFloat * outputMultiplier) / inputMultiplier;
    const outputStr = outputFloat.toFixed(6).replace(/[.,]*0+$/, '');
    setOutputStr(outputStr);
  }, [selected1, selected2, inputStr]);

  const DropDown = ({type}: DropDownProps) => {
    const selected = type === 'input1' ? selected1 : selected2;
    return (
      <TouchableOpacity
        style={localStyles.pickList}
        onPress={async () => {
          const selection: string = await SheetManager.show(
            'converter-picker',
            {
              payload: {measure, selected},
            },
          );
          type === 'input1' && setSelected1(selection);
          type === 'input2' && setSelected2(selection);
        }}>
        <Text style={styles.title2}>{selected}</Text>
        <Icon name="chevron-down-outline" size={18} color="grey" />
      </TouchableOpacity>
    );
  };

  const buildInputValue = (digit: string) => {
    let valueStr = inputStr;

    if (digit === 'CE') {
      valueStr = '0';
      setOutputStr('0');
    } else if (valueStr.length > 0 && digit === 'R') {
      valueStr = valueStr.slice(0, -1);
    } else if (digit === '.') {
      valueStr = inputStr.includes('.') ? valueStr : valueStr + digit;
    } else {
      valueStr = valueStr === '0' ? digit : valueStr + digit;
    }

    setInputStr(valueStr);
  };

  return (
    <View style={styles.container}>
      <View style={localStyles.displayContainer}>
        <Text style={styles.title1}>{inputStr}</Text>
        <DropDown type={'input1'} />
        <Text style={styles.title1}>{output}</Text>
        <DropDown type={'input2'} />
      </View>
      <View style={styles.row}>
        <StyledButton
          size={3}
          style="light"
          text=""
          action={() => buildInputValue('')}
        />
        <StyledButton
          size={3}
          style="light"
          text="CE"
          action={() => buildInputValue('CE')}
        />
        <StyledButton
          size={3}
          style="light"
          icon="backspace-outline"
          action={() => buildInputValue('R')}
        />
      </View>
      <View style={styles.row}>
        <StyledButton
          size={3}
          style="light"
          text="7"
          action={() => buildInputValue('7')}
        />
        <StyledButton
          size={3}
          style="light"
          text="8"
          action={() => buildInputValue('8')}
        />
        <StyledButton
          size={3}
          style="light"
          text="9"
          action={() => buildInputValue('9')}
        />
      </View>
      <View style={styles.row}>
        <StyledButton
          size={3}
          style="light"
          text="4"
          action={() => buildInputValue('4')}
        />
        <StyledButton
          size={3}
          style="light"
          text="5"
          action={() => buildInputValue('5')}
        />
        <StyledButton
          size={3}
          style="light"
          text="6"
          action={() => buildInputValue('6')}
        />
      </View>
      <View style={styles.row}>
        <StyledButton
          size={3}
          style="light"
          text="1"
          action={() => buildInputValue('1')}
        />
        <StyledButton
          size={3}
          style="light"
          text="2"
          action={() => buildInputValue('2')}
        />
        <StyledButton
          size={3}
          style="light"
          text="3"
          action={() => buildInputValue('3')}
        />
      </View>
      <View style={styles.row}>
        <StyledButton
          size={3}
          style="light"
          text=""
          action={() => buildInputValue('')}
        />
        <StyledButton
          size={3}
          style="light"
          text="0"
          action={() => buildInputValue('0')}
        />
        <StyledButton
          size={3}
          style="light"
          text="."
          action={() => buildInputValue('.')}
        />
      </View>
    </View>
  );
};

export default ConverterBase;

const localStyles = StyleSheet.create({
  displayContainer: {
    marginLeft: 20,
    marginBottom: 40,
  },
  pickList: {
    flexDirection: 'row',
  },
});
