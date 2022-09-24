import React, { useState } from 'react';
import { LinkText, Page, RowOrColumn, H1 } from '../ui';
import styled from '../styled';
import glacier_pano from './glacier-np-pano.jpeg';

const GlacierPano = styled.img.attrs({
  src: glacier_pano,
})`
  width: 100%;
`;

const MoreContainer = styled.div`
  padding: 16px 32px;
  background-color: ${(t) => t.theme.lightGray};
`;

export const About: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const toggle = () => setExpanded(!expanded);

  return (
    <Page>
      <H1>About Us</H1>
      <p>
        GratitudeTeam.org is a website which coordinates meeting and connecting
        with others around shared interests and practices. Small groups meet
        over Zoom to discuss books, practice mindfulness techniques, and connect
        with each other on a deep level. Being vulnerable and sharing
        authentically, groups bond and connect, lifting each other up and
        growing in gratitude for the beautiful lives we're each living.
      </p>
      <p>
        I built this website to connect with others and to share practices that
        have been hugely beneficial to my life and well-being. Reading,
        meditation, and journaling to name a few. By sharing these practices, I
        grow in them myself and find great pleasure in spreading their gifts to
        others.
      </p>
      <LinkText onClick={toggle}>More philosophy...</LinkText>
      {expanded ? (
        <MoreContainer>
          <p>
            We all share in the same human experience where nothing lasts and
            everything is constantly changing. Where we want to hold on to what
            we love for as long as we can but always lose it in the end. In a
            word, we struggle. We all do it and we are not meant to do it alone.
          </p>
          <p>
            With so much going on in our lives, it can be difficult to set time
            aside to pause, rest, reflect, and realize we have everything we
            need inside. Connecting with others who share the same struggles as
            we do and holding moments of peace and introspection together is
            deeply healing. Sharing in the struggle and realizing our
            commonalities reminds us of the mystery and wonder of our situation
            as humans here on Earth. Ultimately, it returns us to seeing the
            love, joy, and wonder that can be found in our lives at any moment.
          </p>
          <p>
            I believe we're at our best when we're full of and overflowing with
            love, joy, and wonder. So sign up for a meeting that scares you a
            little bit and grow today!
          </p>
          <RowOrColumn>
            <GlacierPano />
          </RowOrColumn>
        </MoreContainer>
      ) : null}
      <p>
        This website is built and maintained by myself, Cash Compton. I am
        currently the only guaranteed member of every Gratitude Team video call.
        To learn more, sign up for a call and spend some time with me (and
        possibly a few others). No experience is necessary, just an open mind,
        heart, and willingness to connect. I hope to see you soon!
      </p>
      <p>
        With gratitude, <br />
        Cash
      </p>
    </Page>
  );
};
