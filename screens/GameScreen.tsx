import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Title from '../components/Title';
import COLORS from '../constants/colors';
import AppButton from '../components/AppButton';
import IonIcon from 'react-native-vector-icons/Ionicons';

function generateRandomNumber(min: number, max: number, exclude: number) {
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  if (randomNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNum;
  }
}

type GameScreenProps = {
  actualNumber: number;
  onGameOver: () => void;
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({actualNumber, onGameOver}: GameScreenProps) => {
  const intialGuess = generateRandomNumber(1, 100, actualNumber);
  const [currentGuess, setCurrentGuess] = useState(intialGuess);

  useEffect(() => {
    if (currentGuess === actualNumber) {
      onGameOver();
    }
  }, [currentGuess, actualNumber, onGameOver]);

  function handleNextGuess(direction: string) {
    if (
      (direction === 'lower' && currentGuess < actualNumber) ||
      (direction === 'higher' && currentGuess > actualNumber)
    ) {
      Alert.alert("Don't Lie", 'Please tell the correct way for guessing');
      return;
    }
    if (direction === 'lower') {
      // if answer is lower than current guess
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRandomNumber = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setCurrentGuess(newRandomNumber);
  }
  return (
    <View>
      <Title>Opponent Guess</Title>
      <View style={styles.guessContainer}>
        <Text style={styles.guessText}>{currentGuess}</Text>
        <View>
          <Text style={styles.infoText}>Higher or Lower?</Text>
          <View>
            <AppButton onPress={() => handleNextGuess('lower')}>
              <IonIcon name="remove" size={18} />
            </AppButton>
            <AppButton onPress={() => handleNextGuess('higher')}>
              <IonIcon name="add-outline" size={18} />
            </AppButton>
          </View>
        </View>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  infoText: {color: '#fff', textAlign: 'center', marginBottom: 8},
  guessContainer: {
    borderColor: COLORS.accent500,
    borderWidth: 3,
    borderRadius: 4,
    marginHorizontal: 40,
    padding: 20,
  },
  guessText: {
    fontSize: 34,
    color: COLORS.accent500,
    textAlign: 'center',
  },
});
