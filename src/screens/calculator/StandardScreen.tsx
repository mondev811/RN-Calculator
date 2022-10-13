import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StyledButton} from '../../components/StyledButton';

export const StandardScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>0</Text>
      </View>
      <View style={styles.row}>
        <StyledButton
          size={1}
          style="clear"
          text="MC"
          action={() => console.log('pressed')}
        />
        <StyledButton
          size={1}
          style="clear"
          text="MR"
          action={() => console.log('pressed')}
        />
        <StyledButton
          size={1}
          style="clear"
          text="M+"
          action={() => console.log('pressed')}
        />
        <StyledButton
          size={1}
          style="clear"
          text="M-"
          action={() => console.log('pressed')}
        />
        <StyledButton
          size={1}
          style="clear"
          text="MS"
          action={() => console.log('pressed')}
        />
        <StyledButton
          size={1}
          style="clear"
          text="M^"
          action={() => console.log('pressed')}
        />
      </View>
      <View style={styles.row}>
        <StyledButton
          size={2}
          style="dark"
          text="%"
          action={() => console.log('pressed')}
        />
        <StyledButton
          size={2}
          style="dark"
          text="CE"
          action={() => console.log('pressed')}
        />
        <StyledButton
          size={2}
          style="dark"
          text="C"
          action={() => console.log('pressed')}
        />
        <StyledButton
          size={2}
          style="dark"
          icon="backspace-outline"
          action={() => console.log('pressed')}
        />
      </View>
      <View style={styles.row}>
        <StyledButton
          size={2}
          style="dark"
          text="1/x"
          action={() => console.log('pressed')}
        />
        <StyledButton
          size={2}
          style="dark"
          text="x^2"
          action={() => console.log('pressed')}
        />
        <StyledButton
          size={2}
          style="dark"
          text="sqrt(x)"
          action={() => console.log('pressed')}
        />
        <StyledButton
          size={2}
          style="dark"
          text="/"
          action={() => console.log('pressed')}
        />
      </View>
      <View style={styles.row}>
        <StyledButton
          size={2}
          style="light"
          text="7"
          action={() => console.log('pressed')}
        />
        <StyledButton
          size={2}
          style="light"
          text="8"
          action={() => console.log('pressed')}
        />
        <StyledButton
          size={2}
          style="light"
          text="9"
          action={() => console.log('pressed')}
        />
        <StyledButton
          size={2}
          style="dark"
          text="X"
          action={() => console.log('pressed')}
        />
      </View>
      <View style={styles.row}>
        <StyledButton
          size={2}
          style="light"
          text="4"
          action={() => console.log('pressed')}
        />
        <StyledButton
          size={2}
          style="light"
          text="5"
          action={() => console.log('pressed')}
        />
        <StyledButton
          size={2}
          style="light"
          text="6"
          action={() => console.log('pressed')}
        />
        <StyledButton
          size={2}
          style="dark"
          text="-"
          action={() => console.log('pressed')}
        />
      </View>
      <View style={styles.row}>
        <StyledButton
          size={2}
          style="light"
          text="1"
          action={() => console.log('pressed')}
        />
        <StyledButton
          size={2}
          style="light"
          text="2"
          action={() => console.log('pressed')}
        />
        <StyledButton
          size={2}
          style="light"
          text="3"
          action={() => console.log('pressed')}
        />
        <StyledButton
          size={2}
          style="dark"
          text="+"
          action={() => console.log('pressed')}
        />
      </View>
      <View style={styles.row}>
        <StyledButton
          size={2}
          style="light"
          text="+/-"
          action={() => console.log('pressed')}
        />
        <StyledButton
          size={2}
          style="light"
          text="0"
          action={() => console.log('pressed')}
        />
        <StyledButton
          size={2}
          style="light"
          text="."
          action={() => console.log('pressed')}
        />
        <StyledButton
          size={2}
          style="highlight"
          text="="
          action={() => console.log('pressed')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 60,
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  display: {marginTop: 30, marginBottom: 10, marginHorizontal: 20},
  displayText: {
    fontSize: 60,
    textAlign: 'right',
    color: 'black',
  },
});
