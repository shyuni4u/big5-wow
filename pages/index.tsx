import React from 'react';
import Router from 'next/router';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import Panel from '../components/atoms/Panel';
import Button from '../components/atoms/Button';
import Wrapper from '../components/organisms/Wrapper';

import reducerTest from '../reducers/reducerTest';
// const StyledLang = styled.div`
//   position: absolute;
//   top: 5px;
//   right: 5px;
//   color: ${({ theme }) => theme.colors.white};
// `;
// const StyledLangButton = styled.button`
//   color: ${({ theme }) => theme.colors.white};
//   cursor: pointer;
// `;
const StyledGoDetail = styled.a`
  font-size: 0.6em;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  padding: 2px 5px;
  user-select: none;
  cursor: pointer;
`;

export const Index: React.FC = () => {
  const { t } = useTranslation();
  const { testInfo } = reducerTest();

  const goWowClass = (newbie: boolean) => {
    const temp = testInfo.get;
    temp.newbie = newbie;
    testInfo.set(temp);
    Router.push('./wowclass');
  };
  // const changelanguageToKo = () => i18n.changeLanguage('ko');
  // const changelanguageToEn = () => i18n.changeLanguage('en');
  return (
    <Wrapper>
      {/* <StyledLang>
          <StyledLangButton type={'button'} onClick={changelanguageToKo}>
            한국어
          </StyledLangButton>
          <StyledLangButton type={'button'} onClick={changelanguageToEn}>
            English
          </StyledLangButton>
        </StyledLang> */}
      <img
        src={'/logo-wow-small.png'}
        alt={'WOW LOGO'}
        style={{
          width: '40px',
          height: '40px',
          margin: '10px auto'
        }}
      />
      <Panel>
        <h3 className={'panel-sub-title'}>WoW 직업 선택</h3>
        <h2 className={'panel-title'}>Big 5 테스트란?</h2>
        <div className={'panel-text'}>
          인간의 성격을 5가지의 상호 독립적인 요인들로 설명하는 성격심리학적
          모형.
          <br /> 학계에서 논의된 5요인 모형을 기반으로 한다.
          <br /> 대중에게는 그다지 알려지지 않은 모형이지만 전세계의
          성격심리학자들에게 엄청난 신뢰를 받고 있는 검증된 이론이다.
          <br />
          <StyledGoDetail
            href={'https://namu.wiki/w/Big5'}
            title={'[나무위키] Big 5 테스트'}
            target={'_blank'}
          >
            자세히
          </StyledGoDetail>
        </div>
      </Panel>
      <Panel>
        <img
          src={'/logo-wow.png'}
          alt={'WOW LOGO'}
          style={{
            maxWidth: '380px',
            margin: '0 auto'
          }}
        />
        <div className={'panel-text'}>
          <h3 className={'panel-sub-title'}>
            월드오브워크래프트를 플레이해보신 적이 있습니까?
          </h3>
          <br />
          <Button primary={true} onClick={() => goWowClass(true)}>
            예
          </Button>
          <Button onClick={() => goWowClass(false)}>아니요</Button>
        </div>
      </Panel>
    </Wrapper>
  );
};

export default Index;
