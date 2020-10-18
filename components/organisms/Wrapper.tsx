import React from 'react';
import styled from 'styled-components';
import '../../locales/i18n';

import GlobalStyle from '../../styles/global-styles';
import theme from '../../styles/theme';
import { ThemeProvider } from '../../styles/themed-components';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StyledWrapper = styled.section`
  width: 100%;
  min-height: 100%;
`;

export const Wrapper: React.FC = ({ children }) => {
  return (
    <StyledWrapper>
      <ToastContainer />
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledWrapper>
  );
};

export default Wrapper;
