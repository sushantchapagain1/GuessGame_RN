import {Alert, StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import AppButton from '../components/AppButton';

import COLORS from '../constants/colors';
import Title from '../components/Title';

type StartScreenProps = {
  getConfirmedNumber: (confirmed: number) => void;
};

const StartScreen = ({getConfirmedNumber}: StartScreenProps) => {
  const [number, setNumber] = useState('');

  function handleReset() {
    setNumber('');
  }
  function handleConfirm() {
    const choosenNumber = Number(number);
    if (!choosenNumber || choosenNumber <= 0 || choosenNumber >= 99) {
      Alert.alert('Invalid Number', 'Number must be between 1 and 99', [
        {text: 'Okay', style: 'default'},
      ]);
      return;
    }
    getConfirmedNumber(choosenNumber);
  }

  return (
    <View style={styles.startContainer}>
      <Title>Enter a number</Title>
      <View style={styles.container}>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          value={number}
          onChangeText={value => setNumber(value)}
          // autoCorrect={false} useful in email texts
          // autoCapitalize=one' usefull when character
        />
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <AppButton onPress={handleReset}>Reset</AppButton>
          </View>
          <View style={styles.btn}>
            <AppButton onPress={handleConfirm}>Confirm</AppButton>
          </View>
        </View>
      </View>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  startContainer: {
    marginTop: 100,
  },
  container: {
    backgroundColor: COLORS.primary600,
    padding: 16,
    marginHorizontal: 20,
    borderRadius: 6,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberInput: {
    color: COLORS.accent500,
    fontSize: 32,
    borderBottomColor: COLORS.accent500,
    borderBottomWidth: 1,
    fontWeight: 'bold',
    height: 55,
    width: 50,
    textAlign: 'center',
    marginBottom: 8,
  },
  btnContainer: {
    flexDirection: 'row',
  },
  btn: {
    flex: 1,
  },
});
