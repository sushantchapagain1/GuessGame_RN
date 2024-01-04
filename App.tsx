import React, {useState} from 'react';
import StartScreen from './screens/StartScreen';
import {StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './screens/GameScreen';
import COLORS from './constants/colors';
import GameOver from './screens/GameOver';

const App = () => {
  const [confirmedNumber, setConfirmedNumber] = useState<number>();
  const [isGameOver, setIsGameOver] = useState(true);

  function getConfirmedNumber(confirmed: number) {
    setConfirmedNumber(confirmed);
    setIsGameOver(false);
  }

  function handleGameOver() {
    setIsGameOver(true);
  }

  // Not using rn navigation in this app.
  let screen = <StartScreen getConfirmedNumber={getConfirmedNumber} />;

  if (confirmedNumber) {
    screen = (
      <GameScreen actualNumber={confirmedNumber} onGameOver={handleGameOver} />
    );
  }

  if (isGameOver && confirmedNumber) {
    screen = <GameOver />;
  }

  return (
    <LinearGradient
      colors={[COLORS.primary600, COLORS.accent500]}
      style={styles.app}>
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
