import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from '../../theme/globalStyles';
import {StyledButton} from '../../components/StyledButton';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {RootDrawerParamList} from '../../navigation/MainDrawer';
import {Measures} from '../converter/units';

type Props = DrawerScreenProps<RootDrawerParamList, 'ConverterBase'>;

const ConverterBase = ({route, navigation}: Props) => {
  const measure = route.params.measure;
  useEffect(() => {
    navigation.setOptions({title: measure});
  }, [measure]);

  return (
    <View style={styles.container}>
      <View style={localStyles.displayContainer}>
        <Text style={styles.title1}>0</Text>
        <Text style={styles.title2}>{Measures[measure][0]}</Text>
        <Text style={styles.title1}>0</Text>
        <Text style={styles.title2}>{Measures[measure][1]}</Text>
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
});
