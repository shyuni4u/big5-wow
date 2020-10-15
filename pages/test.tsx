import React from 'react';
import styled from 'styled-components';

import Wrapper from '../components/organisms/Wrapper';
import ClassForm from '../components/organisms/WowClass';
import TestForm from '../components/organisms/Test';

const StyledTest = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 150px;
  ${({ theme }) => theme.media.tablet`
    flex-direction: column;
    padding-top: 0px;
  `}
  ${({ theme }) => theme.media.mobile`
    flex-direction: column;
    padding-top: 0px;
  `}
`;
const StyleClassWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.primary};
  ${({ theme }) => theme.media.desktop`
    flex: 0 0 600px;
    height: 600px;
  `}
  ${({ theme }) => theme.media.tablet`
    flex-direction: column;
    margin-top: 0px;
  `}
  ${({ theme }) => theme.media.mobile`
    flex-direction: column;
    margin-top: 0px;
  `}
`;
const StyleTestWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.media.desktop`
    flex: 0 0 600px;
    height: 600px;
  `}
  ${({ theme }) => theme.media.tablet`
    flex-direction: column;
    margin-top: 0px;
  `}
  ${({ theme }) => theme.media.mobile`
    flex-direction: column;
    margin-top: 0px;
  `}
`;

export const Test: React.FC = () => {
  return (
    <Wrapper>
      <StyledTest>
        <StyleClassWrapper>
          <ClassForm />
        </StyleClassWrapper>
        <StyleTestWrapper>
          <TestForm />
        </StyleTestWrapper>
      </StyledTest>
    </Wrapper>
  );
};

export default Test;
