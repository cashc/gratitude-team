import React, { useEffect, useState } from 'react';
import styled from '../styled';
import { TagButton } from '../Tags';
import { TagLD, EventLD } from '../types';
import { Page, TextSmall, Row, H2 } from '../ui';
import { WEEKDAYS, MONTHS, Calendar } from '../Calendar';

const TagsContainer = styled(Row)`
  margin: 40px 0;
`;

const now = new Date();

export const Home: React.FC = () => {
  const [tags, setTags] = useState<TagLD[]>([]);
  const [events, setEvents] = useState<EventLD[]>([]);
  const [selectedDate, setSelectedDate] = useState(now);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setTags([
      { name: 'Meditation', id: 0 },
      { name: 'Book Club', id: 1 },
      { name: 'Journaling', id: 2 },
      { name: 'Breathwork', id: 3 },
      { name: 'Dance', id: 4 },
    ]);

    setEvents([
      {
        name: 'Morning Guided Meditation',
        id: 0,
        start_time: 'Fri Sep 30 2022 07:00:00 GMT-0700 (Pacific Daylight Time)',
        // start_time: 1664547251376,
        duration_mins: 30,
        created_by_id: 0,
        facilitated_by_id: 0,
        invited_ids: [],
        hidden: false,
        access_ids: [],
        description: '',
        tag_ids: [0],
      },
    ]);
  }

  return (
    <Page>
      <div>
        Warning: Alpha version. Nothing works yet. Check back tomorrow 🤓
      </div>
      <TagsContainer>
        {tags.map((t) => (
          <TagButton key={t.id} tag={t} />
        ))}
      </TagsContainer>
      <H2 style={{ marginBottom: 0 }}>Gatherings</H2>
      <TextSmall>{events.length} available</TextSmall>
      <Calendar selectedDate={selectedDate} now={now} events={events} />
    </Page>
  );
};
