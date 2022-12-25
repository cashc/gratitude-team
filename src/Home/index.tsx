import React, { useEffect, useState } from 'react';
import {
  MdOutlineFilterAlt,
  MdOutlineExpandMore,
  MdOutlineExpandLess,
} from 'react-icons/md';
import styled from '../styled';
import { TagButton } from '../Tags';
import { TagLD, EventLD } from '../types';
import { Page, TextSmall, Row, H2 } from '../ui';
import { Calendar, getTimeUntilEvent } from '../Calendar';

const GatheringsHeader = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const FilterContainer = styled.div<{ isVisible: boolean }>`
  display: flex;
  justify-content: flex-end;

  transition: all 200ms ease-in-out;
  overflow: hidden;
  ${(t) => (t.isVisible ? 'max-height: 500px;' : 'max-height: 0;')}
`;

const FilterButtons = styled(Row)`
  max-width: 420px;
`;

const Button = styled.div`
  display: flex;
  padding: 10px;
  margin-bottom: -8px;
  cursor: pointer;

  svg {
    font-size: 19px;
  }
`;

const now = new Date();

export const Home: React.FC = () => {
  const [tags, setTags] = useState<TagLD[]>([]);
  const [events, setEvents] = useState<EventLD[]>([]);
  const [selectedDate, setSelectedDate] = useState(now);
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventLD>();

  useEffect(() => {
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    getData();
  }, []);

  async function getData() {
    setTags([
      { name: 'Meditation', id: 0 },
      { name: 'Book Club', id: 1 },
      { name: 'Journaling', id: 2 },
      { name: 'Breathwork', id: 3 },
      // { name: 'Dance', id: 4 },
    ]);

    setEvents([
      {
        name: 'Breathwork',
        id: 0,
        start_time: 'Tue Sep 27 2022 07:00:00 GMT-0700 (Pacific Daylight Time)',
        duration_mins: 30,
        created_by_id: 0,
        facilitated_by_id: 0,
        invited_ids: [],
        hidden: false,
        access_ids: [],
        description: `A guided breathwork practice to connect mind, body, and spirit.`,
        tag_ids: [0],
      },
      {
        name: 'Meditation',
        id: 0,
        start_time: 'Tue Sep 27 2022 07:30:00 GMT-0700 (Pacific Daylight Time)',
        duration_mins: 30,
        created_by_id: 0,
        facilitated_by_id: 0,
        invited_ids: [],
        hidden: false,
        access_ids: [],
        description: `A semi-guided meditation that grounds us in the present so we may start our day from a place of gratitude, curiosity, and joy. By practicing together, we are reminded we are not alone and we are stronger together. Every day is a little bit different.`,
        tag_ids: [0],
      },
    ]);
  }

  return (
    <Page>
      <p style={{ textAlign: 'center' }}>
        ⚠️ Warning: Alpha version. Development in progress
      </p>
      <GatheringsHeader>
        <div>
          <H2 style={{ marginBottom: 0 }}>Gatherings</H2>
          <TextSmall>{events.length}? available</TextSmall>
        </div>
        <Button onClick={() => setFiltersVisible(!filtersVisible)}>
          <MdOutlineFilterAlt /> &nbsp;Filter&nbsp;
          {filtersVisible ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
        </Button>
      </GatheringsHeader>

      <FilterContainer isVisible={filtersVisible}>
        <FilterButtons>
          {tags.map((t) => (
            <TagButton key={t.id} tag={t} />
          ))}
        </FilterButtons>
      </FilterContainer>

      <Calendar
        selectedDate={selectedDate}
        now={now}
        events={events}
        selectedEvent={selectedEvent}
        setSelectedEvent={setSelectedEvent}
      />
      {selectedEvent ? null : (
        <div>
          <p>Next gathering happening {getTimeUntilEvent(events[0])}</p>
          <p>
            Join here:{' '}
            <a href="https://us06web.zoom.us/j/2909570085">
              https://us06web.zoom.us/j/2909570085
            </a>
            <br />
            Meeting ID: 290 957 0085
          </p>
        </div>
      )}
    </Page>
  );
};
