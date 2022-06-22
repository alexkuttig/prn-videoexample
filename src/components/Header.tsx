import React from 'react';
import {Text, StyleSheet} from 'react-native';

interface HeaderProps {
  text: string;
}

const Header = (props: HeaderProps) => {
  return <Text style={styles.title}>{props.text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default Header;
