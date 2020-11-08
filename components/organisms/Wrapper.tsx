import React from 'react';
import styled from 'styled-components';
import '../../locales/i18n';

import GlobalStyle from '../../styles/global-styles';
import theme from '../../styles/theme';
import { ThemeProvider } from '../../styles/themed-components';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StyledWrapper = styled.div`
  width: 680px;
  height: 100%;
  margin: 0px auto;
  position: relative;
  ${({ theme }) => theme.media.tablet`
    width: 100%;
  `}
  ${({ theme }) => theme.media.mobile`
    width: 100%;
  `}
`;

export const Wrapper: React.FC = ({ children }) => {
  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <StyledWrapper>{children}</StyledWrapper>
      </ThemeProvider>
    </>
  );
};

export default Wrapper;

// <!--
// Copyright 2017 The Kubernetes Authors.

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// -->
