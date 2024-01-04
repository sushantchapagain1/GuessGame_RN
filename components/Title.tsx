import {StyleSheet, Text} from 'react-native';
import React from 'react';

const Title = ({children}: {children: React.ReactNode}) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    borderColor: '#fff',
    borderWidth: 1,
    textAlign: 'center',
    padding: 12,
    margin: 24,
  },
});
