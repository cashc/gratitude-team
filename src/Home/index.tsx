import React, { useState } from 'react';
import styled from '../styled';
import { H3, Text, TextSmall, RowOrColumn, TextLarge } from '../shared-ui';

const Body = styled(Text)`
  margin: 10px auto;
  max-width: 720px;
`;

const IntentionsContainer = styled(RowOrColumn)`
  width: 100%;
  max-width: 520px;
  height: 140px;
`;

const Intention = styled(Text)`
  margin: 5px;
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

const symbols = ['🍌', '🦸🏼‍♀️', '🐶', '🦀', '🦫', '🌞', '🧘🏼‍♂️', '🐼'];
const symbol = symbols[getRandomIndex(symbols.length)];

const intentions = [
  `Sharing in the struggle to be present, grateful, and full of love ${symbol}% of the time.`,
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

const startIndex = getRandomIndex(intentions.length);

export const Home = () => {
  const [index, setIndex] = useState(startIndex);

  const intentionAbove = intentions[index % intentions.length];
  const intention = intentions[(index + 1) % intentions.length];
  const intentionBelow = intentions[(index + 2) % intentions.length];

  const decrementIndex = () => setIndex(index - 1);
  const incrementIndex = () => setIndex(index + 1);

  return (
    <Body>
      <IntentionsContainer>
        <TextLarge style={{ fontStyle: 'italic' }}>Intention:</TextLarge>
        <div>
          <IntentionAbove onClick={decrementIndex}>
            {intentionAbove}
          </IntentionAbove>
          <Intention onClick={incrementIndex}>{intention}</Intention>
          <IntentionBelow onClick={incrementIndex}>
            {intentionBelow}
          </IntentionBelow>
        </div>
      </IntentionsContainer>
      <H3 style={{ marginTop: 50 }}>Choose a time:</H3>
      <TextSmall>Coming soon...</TextSmall>
    </Body>
  );
};
