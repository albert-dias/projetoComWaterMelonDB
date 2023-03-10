import { Platform } from 'react-native';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.background};
`;

export const TopContent = styled.View`
  height: ${RFPercentage(65)}px;
  padding: ${Platform.OS === "ios" ? getStatusBarHeight() + RFValue(16) : RFValue(16)}px ${RFValue(16)}px ${RFValue(24)}px;
  background: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: space-around;
`;

export const Logo = styled.View`
height: ${RFValue(50)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.black};
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.mediun};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.shape};
  text-align: center;
`;

export const ContentForm = styled.View`
  width: 100%;
  padding: ${RFValue(16)}px ${RFValue(16)}px ${Platform.OS === "ios" ? getBottomSpace() + RFValue(16) : RFValue(16)}px;
  justify-content: center;
`;