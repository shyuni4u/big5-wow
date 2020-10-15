import React from 'react';
import styled from 'styled-components';
import '../../locales/i18n';
import { useTranslation } from 'react-i18next';

import GlobalStyle from '../../styles/global-styles';
import theme from '../../styles/theme';
import { ThemeProvider } from '../../styles/themed-components';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StyledWrapper = styled.section`
  width: 100%;
  min-height: 100%;
  position: relative;
`;
const StyledLang = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`;

export const Wrapper: React.FC = ({ children }) => {
  const { t, i18n } = useTranslation();

  const changelanguageToKo = () => i18n.changeLanguage('ko');
  const changelanguageToEn = () => i18n.changeLanguage('en');

  return (
    <StyledWrapper>
      <ToastContainer />
      <StyledLang>
        <button onClick={changelanguageToKo}>한국어</button>
        <button onClick={changelanguageToEn}>English</button>
      </StyledLang>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledWrapper>
  );
};

export default Wrapper;
