import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.article`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 100%;
  padding: 40px;
  ${({ theme }) => theme.media.tablet`
    padding: 15px;
  `}
  ${({ theme }) => theme.media.mobile`
    padding: 15px;
  `}
`;
const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h2};
  margin: 20px 0;
  ${({ theme }) => theme.media.tablet`
    margin: 20px 0 10px;
  `}
  ${({ theme }) => theme.media.mobile`
    margin: 20px 0 10px;
  `}
`;
const StyledContent = styled.div``;
const StyledSubContentWrapper = styled.div`
  padding: 10px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
const StyledSubTitle = styled.h4`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.subtitle16};
  margin-bottom: 10px;
`;
const StyledSubContent = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.body14};
  line-height: ${({ theme }) => theme.fontSizes.h3};

  span.sub-title {
    margin-bottom: 10px;
  }
`;
const StyledSubInnerContent = styled.div`
  padding: 10px;
  margin-bottom: 10px;
`;
const StyledGoDetail = styled.a`
  font-size: 0.6em;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  padding: 2px 5px;
  margin-left: 10px;
  user-select: none;
  cursor: pointer;
  &:hover {
    font-weight: 600;
  }
`;

export const Intro: React.FC = () => {
  return (
    <StyledWrapper>
      <StyledTitle>Big 5 테스트 (feat. WOW 직업 통계)</StyledTitle>
      <StyledContent>
        <StyledSubContentWrapper
          style={{
            backgroundColor: '#f3ffe3',
            border: '1px solid #9fbd63'
          }}
        >
          <StyledSubTitle>1. Big 5 테스트란 ?</StyledSubTitle>
          <StyledSubContent>
            1976년에 심리학자 폴 코스타(Paul Costa Jr.)와 로버트 매크레이(Robert
            R. McCrae)가 개발했으며, 인간의 성격을 5가지의 상호 독립적인
            요인들로 설명하는 성격심리학적 모형. 학계에서 논의된 5요인 모형(FFM;
            Five-Factor Model)을 기반으로 하며, 검사는 NEO-PI-R이라고 불린다.
            간혹 5가지 요인들의 두문자어를 빌려서 OCEAN이라고도 불린다.
            <StyledGoDetail href={'https://namu.wiki/w/Big5'} target={'_blank'}>
              자세히
            </StyledGoDetail>
          </StyledSubContent>
        </StyledSubContentWrapper>
        <StyledSubContentWrapper
          style={{
            backgroundColor: '#e0ebff',
            border: '1px solid #5987bf'
          }}
        >
          <StyledSubTitle>2. 테스트 방법</StyledSubTitle>
          <StyledSubContent>
            A) 월드 오브 워크래프트를 플레이하시나요 ?
            <StyledSubInnerContent>
              <span
                style={{
                  color: '#fff',
                  backgroundColor: '#137333',
                  fontWeight: 600,
                  borderRadius: '5px',
                  padding: '0px 4px',
                  marginRight: '4px'
                }}
              >
                예
              </span>
              플레이하시는 직업을 선택 후 성향 테스트를 해주세요.
              <br />
              <span
                style={{
                  color: '#fff',
                  backgroundColor: '#e95656',
                  fontWeight: 600,
                  borderRadius: '5px',
                  padding: '0px 4px',
                  marginRight: '4px'
                }}
              >
                아니요
              </span>
              자신의 성향에 맞는 직업을 추측하여 선택해보세요.
            </StyledSubInnerContent>
            B) 성향 테스트를 해보세요.
            <StyledSubInnerContent>
              12개의 질문에 답하시면 됩니다.
            </StyledSubInnerContent>
            C) 결과를 확인해보세요.
            <StyledSubInnerContent></StyledSubInnerContent>
          </StyledSubContent>
        </StyledSubContentWrapper>
      </StyledContent>
    </StyledWrapper>
  );
};

export default Intro;
