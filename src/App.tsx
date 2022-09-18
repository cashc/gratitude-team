import React from 'react';
import styled, { ThemeProvider } from './styled';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './theme';
import { Home } from './Home';
import { Why } from './Why';
import { Link } from './shared-ui';

export const ROUTES = {
  home: '/',
  create_account: '/create-account',
  login: '/login',
  why: '/why',
};

const Main = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  flex-direction: column;
  margin: auto;
  background-color: ${(props) => props.theme.background};
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.white};
  padding: 15px;
  box-shadow: ${(props) => props.theme.shadow};

  margin-bottom: 15px;
`;

const LogoEl = styled(Link)`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
`;
const Logo = () => <LogoEl to={ROUTES.home}>Gratitude Team</LogoEl>;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Main>
          <Header>
            <Logo />
            <Link to={ROUTES.why}>About</Link>
          </Header>
          <Routes>
            <Route path={ROUTES.home} element={<Home />} />
            <Route path={ROUTES.why} element={<Why />} />
          </Routes>
        </Main>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
