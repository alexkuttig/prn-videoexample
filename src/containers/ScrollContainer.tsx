import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {ColorConstants, SizeConstants} from 'prn-video-example-styles';

interface ScrollContainerProps {
  children: React.ReactNode;
}

const ScrollContainer = (props: ScrollContainerProps) => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.contentContainer}
      style={styles.backgroundStyle}>
      {props.children}
    </ScrollView>
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
