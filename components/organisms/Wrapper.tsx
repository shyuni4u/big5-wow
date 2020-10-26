import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
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
    <>
      <Head>
        <title>WoW - Big 5 TEST</title>
        <script dangerouslySetInnerHTML={{ __html: `<!--googleoff: all-->` }} />
        <noscript>Sorry. My page needs script.</noscript>
      </Head>
      <StyledWrapper>
        <ToastContainer />
        <GlobalStyle />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </StyledWrapper>
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
