import {StyleSheet, Text, Platform} from 'react-native';
import React from 'react';

const Title = ({children}: {children: React.ReactNode}) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#fff',
    borderColor: '#fff',
    // borderWidth: Platform.OS === 'android' ? 1 : 0,
    borderWidth: Platform.select({ios: 0, android: 1}),

    textAlign: 'center',
    padding: 12,
    margin: 24,
  },
});
