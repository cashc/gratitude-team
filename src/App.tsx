import React from 'react';
import styled, { ThemeProvider } from './styled';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './theme';
import { Link, RowOrColumn } from './ui';
import TextSvg from './ui/svg/text.svg';
import { ROUTES } from './routes';
import { PageNotFound } from './PageNotFound';

const Main = styled.div`
  width: 100%;
  height: 100vh;
  margin: auto;
  background-color: ${(props) => props.theme.background};
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.white};
  padding: 15px;
  box-shadow: ${(props) => props.theme.shadow};

  margin-bottom: 15px;
`;

const LogoEl = styled.img`
  width: 250px;
  margin-bottom: -12px;
`;
const Logo = () => (
  <Link to={ROUTES.home.path}>
    <LogoEl src={TextSvg} />
  </Link>
);

const LinksContainer = styled(RowOrColumn)`
  ${Link} {
    margin: 0 5px;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Logo />
    <LinksContainer>
      <Link to={ROUTES.about.path}>About</Link>
    </LinksContainer>
  </HeaderContainer>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {Object.values(ROUTES).map(({ path, Component, header }) => {
            return (
              <Route
                key={path}
                path={path}
                element={
                  header ? (
                    <Main>
                      <Header />
                      <Component />
                    </Main>
                  ) : (
                    <Component />
                  )
                }
              />
            );
          })}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
