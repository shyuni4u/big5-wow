import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Intro from '../components/organisms/Intro';
import Wrapper from '../components/organisms/Wrapper';

const StyledWrapper = styled.div`
  width: 900px;
  height: 100%;
  margin: 20px auto 0px;
  position: relative;
  ${({ theme }) => theme.media.tablet`
    width: 100%;
  `}
  ${({ theme }) => theme.media.mobile`
    width: 100%;
  `}
`;
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
const StyledCheckNewbieWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  padding: 40px;
  width: 900px;
  height: 100%;
  margin: 0px auto 0px;
  text-align: center;
  ${({ theme }) => theme.media.tablet`
    width: 100%;
  `}
  ${({ theme }) => theme.media.mobile`
    width: 100%;
  `}
`;

export const Index: React.FC = () => {
  const { t } = useTranslation();

  // const changelanguageToKo = () => i18n.changeLanguage('ko');
  // const changelanguageToEn = () => i18n.changeLanguage('en');
  return (
    <Wrapper>
      <StyledWrapper>
        {/* <StyledLang>
          <StyledLangButton type={'button'} onClick={changelanguageToKo}>
            한국어
          </StyledLangButton>
          <StyledLangButton type={'button'} onClick={changelanguageToEn}>
            English
          </StyledLangButton>
        </StyledLang> */}
        <Intro />
        <StyledCheckNewbieWrapper>
          <Link href="/test">
            <a>{t('btn-test-start')}</a>
          </Link>
        </StyledCheckNewbieWrapper>
      </StyledWrapper>
    </Wrapper>
  );
};

export default Index;
