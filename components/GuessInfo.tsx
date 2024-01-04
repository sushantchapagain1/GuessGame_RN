import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import COLORS from '../constants/colors';

type GuessInfoProps = {
  guessNumber: number;
  roundNumber: number;
};

const GuessInfo = ({guessNumber, roundNumber}: GuessInfoProps) => {
  return (
    <View style={styles.item}>
      <Text>#{roundNumber}</Text>
      <Text>Opponent Guess: {guessNumber}</Text>
    </View>
  );
};

export default GuessInfo;

const styles = StyleSheet.create({
  item: {
    backgroundColor: COLORS.accent500,
    borderColor: COLORS.primary600,
    borderWidth: 1,
    borderRadius: 99,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginTop: 12,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 2,
    },
    shadowRadius: 0.13,
    shadowOpacity: 0.25,
  },
});
