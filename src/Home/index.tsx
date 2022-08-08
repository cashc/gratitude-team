import React, { useState } from 'react';
import styled from '../styled';
import { H3, Text, TextSmall } from '../shared-ui';

const Body = styled(Text)`
  margin: 10px auto;
  max-width: 720px;
  text-align: center;
`;

const Intention = styled(Text)`
  margin-bottom: 10px;
  cursor: pointer;
`;
const IntentionAbove = styled(Intention)`
  background: -webkit-linear-gradient(
    ${({ theme }) => `${theme.white}, ${theme.textlight}`}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const IntentionBelow = styled(Intention)`
  background: -webkit-linear-gradient(
    ${({ theme }) => `${theme.textlight}, ${theme.white}`}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const getRandomIndex = (length: number): number =>
  Math.floor(Math.random() * length);

const intentions = [
  'Sharing space with fellow humans struggling for gratitude',
  'Love',
  'Contemplating nothingness with friends',
  'Remembering the mysteries of life',
  'Awakening curiosity, quieting certitude',
  'Being fully present',
  'Holding space',
  'Connecting, learning from, and growing with each other',
  'Sharing moments of peace',
  'Returning your attention to what’s most important to you',
  'Struggling, failing, and laughing at our foolishness',
];
const intentionIndexStart = getRandomIndex(intentions.length);

const symbols = ['🍌', '🦸🏼‍♀️', '🐶', '🦀', '🦫', '🌞', '🧘🏼‍♂️', '🐼'];
const symbolIndexStart = getRandomIndex(symbols.length);

export const Home = () => {
  const [index, setIndex] = useState(0);

  const symbol = symbols[(symbolIndexStart + index) % symbols.length];
  const intention =
    intentions[(intentionIndexStart + index) % intentions.length];
  const intentionAbove =
    intentions[(intentionIndexStart + index - 1) % intentions.length];
  const intentionBelow =
    intentions[(intentionIndexStart + index + 1) % intentions.length];

  const decrementIndex = () => setIndex(index - 1);
  const incrementIndex = () => setIndex(index + 1);

  return (
    <Body>
      <p>
        Sharing in the struggle to be present, grateful, and full of love{' '}
        {symbol}% of the time.
      </p>
      <IntentionAbove onClick={decrementIndex}>{intentionAbove}</IntentionAbove>
      <Intention onClick={incrementIndex}>{intention}</Intention>
      <IntentionBelow onClick={incrementIndex}>{intentionBelow}</IntentionBelow>
      <H3 style={{ marginTop: 50 }}>Choose a time:</H3>
      <TextSmall>Coming soon...</TextSmall>
    </Body>
  );
};
