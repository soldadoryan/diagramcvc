import React from 'react';
import { ThemeProvider } from 'styled-components';
import Diagram from './components/Diagram';
import StepList from './components/StepList';
import { StepProvider } from './contexts/StepsContext';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StepProvider>
          <GlobalStyle />
          <StepList />
          <Diagram />
        </StepProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
