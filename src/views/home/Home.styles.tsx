import {StyleSheet} from 'react-native';
import {
  ColorConstants,
  FontConstants,
  SizeConstants,
} from '../../constants/StyleConstants';
const styles = StyleSheet.create({
  welcome: {
    color: ColorConstants.font,
    fontSize: FontConstants.sizeTitle,
    fontWeight: FontConstants.weightBold,
    marginBottom: SizeConstants.paddingRegular,
  },
  genreTitle: {
    fontSize: FontConstants.sizeRegular,
    marginBottom: SizeConstants.paddingSmall,
    padding: SizeConstants.paddingLarge,
    backgroundColor: ColorConstants.backgroundLight,
    color: ColorConstants.font,
  },
});

export default styles;
