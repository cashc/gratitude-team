import { About, FrequentlyAskedQuestions } from './About';
import { Home } from './Home';

export const ROUTES = {
  create_account: { path: '/create-account', Component: () => null },
  login: { path: '/login', Component: () => null },
  faq: { path: '/faq', Component: FrequentlyAskedQuestions },
  about: { path: '/about', Component: About },
  home: { path: '/', Component: Home },
};
