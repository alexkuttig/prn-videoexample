import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {ColorConstants, SizeConstants} from '../constants/StyleConstants';

interface ScrollContainerProps {
  children: React.ReactNode;
}

const ScrollContainer = (props: ScrollContainerProps) => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.contentContainer}
        style={styles.backgroundStyle}>
        {props.children}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: ColorConstants.background,
  },
  contentContainer: {
    padding: SizeConstants.paddingLarge,
    backgroundColor: ColorConstants.background,
  },
});

export default ScrollContainer;
