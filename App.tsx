import React, {useState} from 'react';
import StartScreen from './screens/StartScreen';
import {StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './screens/GameScreen';
import COLORS from './constants/colors';
import GameOver from './screens/GameOver';
import {StatusBar} from 'react-native';

const App = () => {
  const [confirmedNumber, setConfirmedNumber] = useState<number | null>();
  const [isGameOver, setIsGameOver] = useState(true);
  const [numRounds, setNumRounds] = useState(0);

  function getConfirmedNumber(confirmed: number) {
    setConfirmedNumber(confirmed);
    setIsGameOver(false);
  }

  function handleGameOver(numRound: number) {
    setIsGameOver(true);
    setNumRounds(numRound);
  }

  function handleResetGame() {
    setIsGameOver(false);
    setConfirmedNumber(null);
  }

  // Not using rn navigation in this app.
  let screen = <StartScreen getConfirmedNumber={getConfirmedNumber} />;

  if (confirmedNumber) {
    screen = (
      <GameScreen actualNumber={confirmedNumber} onGameOver={handleGameOver} />
    );
  }

  if (isGameOver && confirmedNumber) {
    screen = (
      <GameOver
        actualNumber={confirmedNumber}
        guessNumTimes={numRounds}
        handleResetGame={handleResetGame}
      />
    );
  }

  return (
    <LinearGradient
      colors={[COLORS.primary600, COLORS.accent500]}
      style={styles.app}>
      {/* works for andriod only need to use SafeAreaProvider */}
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
      />

      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        // apply to image only
        imageStyle={styles.image}
        style={styles.app}>
        <SafeAreaView style={styles.app}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};

export default App;

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
  image: {
    opacity: 0.15,
  },
});
