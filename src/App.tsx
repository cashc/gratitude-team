import React from 'react';
import styled, { ThemeProvider } from './styled';
import theme from './theme';

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
  justify-content: center;

  background-color: ${(props) => props.theme.white};
  padding: 5px;
  box-shadow: ${(props) => props.theme.shadow};

  margin-bottom: 15px;
`;

const LogoEl = styled.div`
  font-size: 2rem;
  font-weight: 600;
`;
const Logo = () => <LogoEl>Gratitude Team</LogoEl>;

const Body = styled.div`
  background-color: ${(props) => props.theme.background};
  margin: 10px;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Header>
          <Logo />
        </Header>
        <Body>Hello, World!</Body>
      </Main>
    </ThemeProvider>
  );
}

export default App;
