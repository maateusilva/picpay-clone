import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../styles/colors';

export const Wrapper = styled.View`
  background: ${colors.PRIMARY};
  flex: 1;
`;

export const Header = styled(LinearGradient)`
  height: 300px;
`;

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${colors.WHITE};
  font-size: 16px;
  font-weight: bold;
`;

export const BalanceContainer = styled.View`
  margin: 10px 0;
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  font-size: 38px;
  color: ${colors.WHITE};
  font-weight: 200;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const EyeButton = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const Info = styled.Text`
  color: ${colors.WHITE};
  font-size: 14px;
  font-weight: bold;
`;

export const Actions = styled.View`
  flex-direction: row;
  margin-top: 40px;
`;

export const Action = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.WHITE};
  width: 150px;
  height: 45px;
  border-radius: 25px;
  margin: 0 10px;
  opacity: 0.6;
`;

export const ActionLabel = styled.Text`
  font-size: 16px;
  color: ${colors.WHITE};
  margin-left: 10px;
`;

export const UseBalance = styled.View`
  background: ${colors.LIGHT_MATTE_BLACK};
  height: 60px;
  flex-direction: row;
  padding: 0 16px;
  align-items: center;
  justify-content: space-between;
`;

export const UseBalanceTitle = styled.Text`
  color: ${colors.WHITE};
  font-size: 16px;
  font-weight: 500;
`;

export const PaymentMethods = styled.View`
  margin-top: 25px;
  padding: 0 16px;
`;

export const PaymentMethodsTitle = styled.Text`
  color: #8E8E93;
  text-transform: uppercase;
`;

export const Card = styled.View`
  background: ${colors.MATTE_BLACK};
  padding: 20px;
  border-radius: 8px;
  margin-top: 10px;
`;

export const CardBody = styled.View`
  flex-direction: row;
`;

export const CardDetails = styled.View`
  flex: 1;
  margin-right: 20px;
`;

export const CardTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.WHITE};
`;

export const CardInfo = styled.Text`
  font-size: 14px;
  color: ${colors.WHITE};
  margin-top: 15px;
  opacity: 0.8;
`;

export const Img = styled.Image`
  width: 60px;
`;

export const AddButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 25px;
`;

export const AddLabel = styled.Text`
  color: ${colors.MATTE_GREEN};
  font-size: 18px;
  font-weight: bold;
  margin-left: 15px;
`;

export const UseTicketContainer = styled.View`
  align-items: center;
  margin-top: 25px;
`;

export const UseTicketButton = styled.TouchableOpacity`
  flex-direction: row;
`;

export const UseTicketLabel = styled.Text`
  color: ${colors.MATTE_GREEN};
  font-size: 16px;
  font-weight: bold;
  margin-left: 15px;
  text-decoration: underline;
`;
