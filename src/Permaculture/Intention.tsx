import React from 'react';
import { Page } from '../ui';

const intentionPrepper = `
  Think about 7 generations in the future.
  What are we leaving our children?
  Which direction do we perceive things going?
`;

const intentionSpiritual = `
  What do we trust in? Do we trust in God's creation or Man's?
`;

export const Intentions: React.FC = () => {
  return (
    <Page>
      <div>{intentionPrepper}</div>
      <div>{intentionSpiritual}</div>
    </Page>
  );
};
