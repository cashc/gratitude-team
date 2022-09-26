import React from 'react';
import styled from '../styled';
import { Event } from '../types';
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

  :last-child {
    border-bottom: none;
  }
`;

const WeekdayEl = styled.div<{ isToday: boolean; small?: boolean }>`
  flex: 1;
  min-width: 82px;
  border-right: 1px solid ${(t) => t.theme.border};

  height: ${(t) => (t.small ? '120px' : '280px')};
  border-bottom: none;

  ${(t) => (t.isToday ? `background: ${t.theme.lightGray};` : '')}

  :last-child {
    border-right: none;
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

interface Props {
  selectedDate: Date;
  now: Date;
  events: Event[];
}

export const Calendar: React.FC<Props> = ({ selectedDate, now, events }) => {
  const firstSundayEpoch =
    +selectedDate - selectedDate.getDay() * ONE_DAY_MILLISECONDS;
  const ThisWeek = WEEKDAYS.map((d, i) => {
    const date = new Date(firstSundayEpoch + ONE_DAY_MILLISECONDS * i);
    const curDate = date.getDate();
    const Events = events
      .filter((e) => isSameDate(new Date(e.start_time), date))
      .map((e) => {
        const eventDate = new Date(e.start_time);
        return (
          <EventContainer>
            {`${eventDate}`.slice(16, 21)} {e.name}
          </EventContainer>
        );
      });
    return (
      <WeekdayEl isToday={isSameDate(now, date)}>
        <WeekdayNameEl isFirst={i === 0}>{d}</WeekdayNameEl>
        <WeekdayContent isFirst={i === 0}>
          {curDate === 1 ? MONTHS[date.getMonth()] : null}
          {curDate}
          {Events}
        </WeekdayContent>
      </WeekdayEl>
    );
  });

  const secondSundayEpoch =
    +selectedDate + (7 - selectedDate.getDay()) * ONE_DAY_MILLISECONDS;
  const NextWeek = WEEKDAYS.map((d, i) => {
    const date = new Date(secondSundayEpoch + ONE_DAY_MILLISECONDS * i);
    const curDate = date.getDate();
    const Events = events
      .filter((e) => isSameDate(new Date(e.start_time), date))
      .map((e) => <EventContainer>{e.name}</EventContainer>);
    return (
      <WeekdayEl isToday={isSameDate(now, date)} small={true}>
        <WeekdayNameEl isFirst={i === 0}></WeekdayNameEl>
        <WeekdayContent isFirst={i === 0}>
          {curDate === 1 ? `${MONTHS[date.getMonth()]} ` : ''}
          {curDate}
          {Events}
        </WeekdayContent>
      </WeekdayEl>
    );
  });

  return (
    <CalendarContainer>
      <WeekdaysContainer>{ThisWeek}</WeekdaysContainer>
      <WeekdaysContainer>{NextWeek}</WeekdaysContainer>
    </CalendarContainer>
  );
};
