import React from 'react';
import { About, FrequentlyAskedQuestions } from './About';
import { Letter, Letters } from './GratitudeLetters';
import { Home } from './Home';

export const ROUTES: {
  [key: string]: {
    path: string;
    Component: React.FC;
    header: boolean;
  };
} = {
  create_account: {
    path: '/create-account',
    Component: () => null,
    header: false,
  },
  login: { path: '/login', Component: () => null, header: false },
  faq: { path: '/faq', Component: FrequentlyAskedQuestions, header: true },
  about: { path: '/about', Component: About, header: true },
  letter: { path: '/letters/:id', Component: Letter, header: false },
  letters: { path: '/letters', Component: Letters, header: false },
  home: { path: '/', Component: Home, header: true },
};
