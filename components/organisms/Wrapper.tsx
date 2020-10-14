import React from 'react';
import styled from 'styled-components';

import GlobalStyle from '../../styles/global-styles';
import theme from '../../styles/theme';
import { ThemeProvider } from '../../styles/themed-components';

const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  overflow: hidden;
`;

export const Wrapper: React.FC = ({ children }) => {
  return (
    <StyledWrapper>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledWrapper>
  );
};

export default Wrapper;
