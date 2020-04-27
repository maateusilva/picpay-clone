import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  background: ${colors.GRAY_BLUE};
  margin: 25px 16px;
  border-radius: 8px;
  height: 150px;
  flex-direction: row;
  align-items: center;
  padding: 15px;
`;

export const Details = styled.View`
  flex: 1;
`;

export const Img = styled.Image``;

export const Title = styled.Text`
  color: ${colors.WHITE};
  font-size: 18px;
  font-weight: bold;
`;

export const Description = styled.Text`
  color: ${colors.WHITE};
  font-size: 14px;
  margin-top: 15px;
`;