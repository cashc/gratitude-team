import React from 'react';
import styled from '../styled';

const Body = styled.div`
  margin: 10px auto;
  max-width: 720px;
`;

export const Why = () => {
  return (
    <Body>
      <p>
        We all share in the same human experience where nothing lasts and
        everything is constantly changing. Where we want to hold on to what we
        love for as long as we can but always lose it in the end. In a word, we
        struggle. Connecting with others and sharing our struggles is deeply
        healing. Sharing in the struggle and realizing our commonalities reminds
        us of the mystery and wonder of our situation and the joy that can be
        found in it.
      </p>
      <p>
        GratitudeTeam.org offers online video calls for groups of 2-5 people who
        all share a desire to connect, hold space for one another, and be
        reminded of the love and mystery of life. Through mindfulness practices,
        breathwork, and check-ins, these small groups bond over their shared
        experiences, filling each other with love and gratitude for the
        beautiful lives we’re each living.
      </p>
      <p>
        This website is built and maintained by Cash Compton, who is currently
        the only guaranteed member of every Gratitude Team video call. To learn
        more, sign up for a call and spend some time with Cash (and possibly 1-3
        others) today! No experience is necessary, just an open mind, heart, and
        willingness to connect.
      </p>
    </Body>
  );
};
