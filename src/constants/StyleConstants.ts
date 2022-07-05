import {Appearance} from 'react-native';

const isDarkMode = Appearance.getColorScheme() === 'dark';

const FontConstants: {
  familyRegular: string;
  sizeTitle: number;
  sizeRegular: number;
  weightBold:
    | 'bold'
    | 'normal'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
} = {
  familyRegular: 'sans-serif',
  sizeTitle: 18,
  sizeRegular: 14,
  weightBold: 'bold',
};

const ColorConstants: {
  background: string;
  backgroundMedium: string;
  backgroundLight: string;
  font: string;
} = {
  background: isDarkMode ? '#333333' : '#efefef',
  backgroundMedium: isDarkMode ? '#666666' : '#dddddd',
  backgroundLight: isDarkMode ? '#444444' : '#e8e8e8',
  font: isDarkMode ? '#eeeeee' : '#222222',
};

const SizeConstants: {
  paddingSmall: number;
  paddingRegular: number;
  paddingLarge: number;
  borderRadius: number;
} = {
  paddingSmall: 2,
  paddingRegular: 8,
  paddingLarge: 16,
  borderRadius: 8,
};

export {FontConstants, ColorConstants, SizeConstants};
