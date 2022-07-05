import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import {SizeConstants, ColorConstants} from '../constants/StyleConstants';

interface BackButtonProps {
  text: string;
  onPress: () => void;
}

const BackButton = (props: BackButtonProps) => {
  return (
    <Pressable onPress={props.onPress} style={styles.backButton}>
      <Text style={styles.backButtonText}>{props.text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  backButton: {
    padding: SizeConstants.paddingLarge,
    marginBottom: SizeConstants.paddingLarge,
    backgroundColor: ColorConstants.backgroundMedium,
  },
  backButtonText: {
    color: ColorConstants.font,
  },
});

export default BackButton;
