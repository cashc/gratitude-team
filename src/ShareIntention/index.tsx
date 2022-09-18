import React from 'react';
import { Label } from '../shared-ui';
import styled from '../styled';

const Body = styled.div`
  margin: 10px auto;
  max-width: 720px;
`;

interface Props {
  user_id: number;
}

export const ShareIntention: React.FC<Props> = ({ user_id }) => {
  console.log(user_id);

  return (
    <Body>
      Share an intention for a future practice
      <input />
      <Label style={{ fontStyle: 'italic' }}>Private</Label>
      <Label style={{ fontStyle: 'italic' }}>Share with Cash</Label>
      <textarea />
    </Body>
  );
};
