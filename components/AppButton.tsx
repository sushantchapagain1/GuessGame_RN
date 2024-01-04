import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import COLORS from '../constants/colors';

type ButtonProps = {
  onPress: () => void;
  children: React.ReactNode;
};

const AppButton = ({onPress, children}: ButtonProps) => {
  return (
    <View style={styles.btnContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{color: '#ffffff57'}}
        style={({pressed}) =>
          pressed ? [styles.btn, styles.pressed] : styles.btn
        }>
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: COLORS.primary500,
    margin: 4,
    borderRadius: 99,
    elevation: 2,
    overflow: 'hidden',
  },
  btn: {
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  btnText: {
    color: '#ffff',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
