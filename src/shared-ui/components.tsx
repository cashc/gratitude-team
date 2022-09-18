import styled from '../styled';

export const RowOrColumn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 680px) {
    flex-direction: column;
  }
`;
