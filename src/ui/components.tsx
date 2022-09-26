import styled from '../styled';
import { Text } from './typography';

export const Page = styled(Text)`
  margin: 10px auto;
  max-width: 720px;
  padding: 0 8px;
`;

export const RowOrColumn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${(t) => t.theme.size.tablet}) {
    flex-direction: column;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
