// import React from 'react';
import styled from '../styled';
import { Link as RouterLink } from 'react-router-dom';

export const Text = styled.div<{
  bold?: boolean;
  center?: boolean;
  light?: boolean;
}>`
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme, light }) => (light ? theme.textlight : theme.text)};
  ${({ bold }) => (bold ? 'font-weight: bold;' : '')}
  ${({ center }) => (center ? 'text-align: center;' : '')}
`;

export const Link = styled(RouterLink)`
  font-size: 16px;
  color: ${(props) => props.theme.primary};
  cursor: pointer;
`;

export const LinkText = styled(Text)`
  font-size: 16px;
  color: ${(props) => props.theme.primary};
  cursor: pointer;
`;

export const H1 = styled(Text)`
  font-size: 40px;
  line-height: 48px;
  font-weight: bold;
`;

export const H2 = styled(Text)`
  font-size: 32px;
  line-height: 38px;
  margin-bottom: 8px;
`;

export const H3 = styled(Text)`
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 8px;
`;

export const H4 = styled(Text)`
  font-size: 20px;
  line-height: 26px;
`;

export const TextSmall = styled(Text)`
  font-size: 14px;
  line-height: 18px;
`;

export const TextLarge = styled(Text)`
  font-size: 18px;
  line-height: 24px;
`;

export const Label = styled(Text).attrs({ light: true })`
  font-size: 12px;
  line-height: 16px;
`;

export const ErrorMessage = styled.div`
  font-size: 13px;
  margin-top: 10px;
  color: ${({ theme }) => theme.failure};
`;

export const HelpText = styled(Text).attrs({ light: true })`
  margin-top: 10px;
`;
