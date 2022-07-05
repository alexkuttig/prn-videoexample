import React from 'react';
import styled from 'styled-components/native';
import {
  ColorConstants,
  FontConstants,
  SizeConstants,
} from '../constants/StyleConstants';

interface HeaderProps {
  text: string;
}

const Header = (props: HeaderProps) => {
  return <StyledText>{props.text}</StyledText>;
};

const StyledText = styled.Text`
  font-size: ${FontConstants.sizeTitle};
  font-weight: ${FontConstants.weightBold};
  margin-bottom: ${SizeConstants.paddingLarge};
  color: ${ColorConstants.font};
`;

export default Header;
