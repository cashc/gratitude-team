import React from 'react';
import styled from '../styled';
import { EventLD } from '../types';
import { TextSmall } from '../ui';
import { MONTHS, WEEKDAYS, ONE_DAY_MILLISECONDS } from './constants';

const CalendarContainer = styled.div`
  margin: 20px 0;
  box-shadow: ${(t) => t.theme.shadow};
  border-radius: 14px;
  background-color: ${(t) => t.theme.backgroundLight};
`;

const WeekdaysContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const WeekdayEl = styled.div<{ isToday: boolean; isPast: boolean }>`
  flex: 1;
  min-width: 82px;
  border-right: 1px solid ${(t) => t.theme.border};

  height: 280px;
  border-bottom: none;

  ${(t) => (t.isToday ? `background: ${t.theme.gray};` : '')}
  ${(t) =>
    t.isPast
      ? `background: ${t.theme.backgroundDisabled}; color: ${t.theme.textlight}; border-color: ${t.theme.borderDisabled};`
      : ''}

  :last-child {
    border-right: none;
    border-radius: 14px 0 0 14px;
  }

  :first-child {
    border-radius: 14px 0 0 14px;
  }
`;

const WeekdayNameEl = styled.div<{ isFirst: boolean }>`
  border-bottom: 1px solid ${(t) => t.theme.border};
  padding: 4px 3px 1px;
  ${({ isFirst }) => (isFirst ? 'padding-left: 10px;' : '')}
`;

const WeekdayContent = styled.div<{ isFirst: boolean }>`
  padding: 2px 3px 0;
  ${({ isFirst }) => (isFirst ? 'padding-left: 10px;' : '')}
`;

const EventContainer = styled(TextSmall)`
  margin: 10px 0;
`;

const isSameDate = (d1: Date, d2: Date): boolean =>
  `${d1}`.slice(0, 15) === `${d2}`.slice(0, 15);

const getDay = (defaultDay: number) => {
  if (defaultDay === 0) {
    return 6;
  }
  return defaultDay - 1;
};

export const getTimeString = (mins: number) => {
  const hours = mins / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  if (hours) {
    return `${rhours} hours ${rminutes} mins`;
  }
  return `${rminutes} mins`;
};

export const getTimeUntilEvent = (ev?: EventLD): string => {
  if (!ev) {
    return '???';
  }
  const eventMs = +new Date(ev.start_time);
  const nowMs = +new Date();
  if (nowMs < eventMs) {
    const minsUntilEvent = Math.floor((eventMs - nowMs) / 60000);
    return `in ${getTimeString(minsUntilEvent)}`;
  } else if (nowMs < eventMs + ev.duration_mins * 60000) {
    return 'now';
  }
  return 'undefined';
};

interface Props {
  selectedDate: Date;
  now: Date;
  events: EventLD[];
  selectedEvent?: EventLD;
  setSelectedEvent: (e: EventLD) => void;
}

export const Calendar: React.FC<Props> = ({
  selectedDate,
  now,
  events,
  selectedEvent,
  setSelectedEvent,
}) => {
  const firstMondayEpoch =
    +selectedDate - getDay(selectedDate.getDay()) * ONE_DAY_MILLISECONDS;

  const Week = WEEKDAYS.map((d, i) => {
    const date = new Date(firstMondayEpoch + ONE_DAY_MILLISECONDS * i);
    const curDate = date.getDate();
    const isPast = date < now;

    const Events = events
      .filter((ev) => isSameDate(new Date(ev.start_time), date))
      .map((ev) => {
        const eventDate = new Date(ev.start_time);
        return (
          <EventContainer key={ev.id} onClick={() => setSelectedEvent(ev)}>
            {`${eventDate}`.slice(16, 21)} {ev.name}
          </EventContainer>
        );
      });

    return (
      <WeekdayEl key={d} isToday={isSameDate(now, date)} isPast={isPast}>
        <WeekdayNameEl isFirst={i === 0}>{d}</WeekdayNameEl>
        <WeekdayContent isFirst={i === 0}>
          {curDate === 1 ? `${MONTHS[date.getMonth()]} ` : null}
          {curDate}
          {Events}
        </WeekdayContent>
      </WeekdayEl>
    );
  });

  return (
    <CalendarContainer>
      <WeekdaysContainer>{Week}</WeekdaysContainer>
    </CalendarContainer>
  );
};
