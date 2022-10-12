import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from '../../theme/globalStyles';
import {StyledButton} from '../../components/StyledButton';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {RootDrawerParamList} from '../../navigation/MainDrawer';
import {Measures} from '../converter/units';
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

  useEffect(() => {
    navigation.setOptions({title: measure});
    setSelected1(initSelected1);
    setSelected2(initSelected2);
  }, [measure, navigation, initSelected1, initSelected2]);

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

  return (
    <View style={styles.container}>
      <View style={localStyles.displayContainer}>
        <Text style={styles.title1}>0</Text>
        <DropDown type={'input1'} />
        <Text style={styles.title1}>0</Text>
        <DropDown type={'input2'} />
      </View>
      <View style={styles.row}>
        <StyledButton
          size={3}
          style="light"
          text=""
          action={() => console.log('pressed')}
        />
        <StyledButton
          size={3}
          style="light"
          text="CE"
          action={() => console.log('pressed')}
        />
        <StyledButton
          size={3}
          style="light"
          text="CE"
          action={() => console.log('pressed')}
        />
      </View>
      <View style={styles.row}>
        <StyledButton
          size={3}
          style="light"
          text="7"
          action={() => console.log('pressed')}
        />
        <StyledButton
          size={3}
          style="light"
          text="8"
          action={() => console.log('pressed')}
        />
        <StyledButton
          size={3}
          style="light"
          text="9"
          action={() => console.log('pressed')}
        />
      </View>
      <View style={styles.row}>
        <StyledButton
          size={3}
          style="light"
          text="4"
          action={() => console.log('pressed')}
        />
        <StyledButton
          size={3}
          style="light"
          text="5"
          action={() => console.log('pressed')}
        />
        <StyledButton
          size={3}
          style="light"
          text="6"
          action={() => console.log('pressed')}
        />
      </View>
      <View style={styles.row}>
        <StyledButton
          size={3}
          style="light"
          text="1"
          action={() => console.log('pressed')}
        />
        <StyledButton
          size={3}
          style="light"
          text="2"
          action={() => console.log('pressed')}
        />
        <StyledButton
          size={3}
          style="light"
          text="3"
          action={() => console.log('pressed')}
        />
      </View>
      <View style={styles.row}>
        <StyledButton
          size={3}
          style="light"
          text=""
          action={() => console.log('pressed')}
        />
        <StyledButton
          size={3}
          style="light"
          text="0"
          action={() => console.log('pressed')}
        />
        <StyledButton
          size={3}
          style="light"
          text="."
          action={() => console.log('pressed')}
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
