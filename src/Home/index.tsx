import React, { useEffect, useState } from 'react';
import styled from '../styled';
import { TagButton } from '../Tags';
import { TagLD, EventLD } from '../types';
import { Page, H3, Label, TextSmall, Row, H4 } from '../ui';

const Container = styled.div``;

const TagsContainer = styled(Row)`
  min-width: 100%;
  max-width: 400px;
  margin: 40px 0;
`;

const now = new Date();

export const Home: React.FC = () => {
  const [tags, setTags] = useState<TagLD[]>([]);
  const [events, setEvents] = useState<EventLD[]>([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setTags([
      { name: 'Meditation', id: 0 },
      { name: 'Book Club', id: 1 },
      { name: 'Journal Prompt', id: 2 },
      { name: 'Meditation', id: 0 },
      { name: 'Book Club', id: 1 },
      { name: 'Journal Prompt', id: 2 },
    ]);

    setEvents([
      {
        name: 'Morning Silent',
        id: 0,
        // startTime: 'Sat, 24 Sep 2022 04:11:15 GMT',
        startTime: 1663992934076,
      },
    ]);
  }

  return (
    <Page>
      <Container>
        <TagsContainer>
          {tags.map((t) => (
            <TagButton key={t.id} tag={t} />
          ))}
        </TagsContainer>
        <H4>Gatherings</H4>
        <Label>Available: {events.length}</Label>
      </Container>
      <H3 style={{ marginTop: 50 }}>Choose a time:</H3>
      <TextSmall></TextSmall>
    </Page>
  );
};