import React from 'react';
import styled from 'styled-components';

import Wrapper from '../components/organisms/Wrapper';
import ClassForm from '../components/organisms/Class';
import TestForm from '../components/organisms/Test';

// ${({theme}) => theme.media.desktop`
//     border: 2px solid blue;
//     ${(props) => `&::before{content:"데스크톱 ${props.text}"}`};
// `}
// ${({theme}) => theme.media.tablet`
//     border: 2px solid yellow;
//     ${(props) => `&::before{content:"태블릿 ${props.text}"}`};
// `}
// ${({theme}) => theme.media.mobile`
//     border: 2px solid purple;
//     ${(props) => `&::before{content:"모바일 ${props.text}"}`};
// `}

const StyledTest = styled.section`
  flex: 1 0;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Test: React.FC = () => {
  return (
    <Wrapper>
      <StyledTest>
        <ClassForm />
        <TestForm />
      </StyledTest>
    </Wrapper>
  );
};

export default Test;
