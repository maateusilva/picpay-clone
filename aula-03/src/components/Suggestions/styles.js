import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    paddingLeft: 16,
  },
}))`
  background: ${colors.LIGHT_BLACK};
  height: 130px;
`;

export const Option = styled.TouchableOpacity`
  width: 80px;
  margin-right: 16px;
  align-items: center;
`;

export const Img = styled.Image``;

export const Label = styled.Text`
  color: ${colors.WHITE};
  font-weight: bold;
  margin-top: 8px;
  font-size: 14px;
`;
