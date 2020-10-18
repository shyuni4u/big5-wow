import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useTranslation } from 'react-i18next';

const StyledWrapper = styled.article`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px;
  width: 100%;
  height: 100%;
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
const StyledQuestionWrapper = styled.div`
  /* font-size: ${({ theme }) => theme.fontSizes.body14}; */
  display: block;
  margin: 16px 0;
  background-color: ${({ theme }) => theme.colors.white};
`;
const StyledQuestion = styled.div`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.body14};
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.colors.grayE};
  border: 1px solid ${({ theme }) => theme.colors.grayD};
  border-bottom: 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
type StyledExampleProp = {
  selected?: boolean;
};
const StyledExample = styled.div<StyledExampleProp>`
  position: relative;
  font-size: ${({ theme }) => theme.fontSizes.body14};
  font-weight: 400;
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.colors.white};
  border-left: 1px solid ${({ theme }) => theme.colors.grayD};
  border-right: 1px solid ${({ theme }) => theme.colors.grayD};
  border-top: 1px solid ${({ theme }) => theme.colors.grayD};
  cursor: pointer;
  ${(props) =>
    props.selected
      ? css`
          background-color: #f8fbf9;
          &::after {
            position: absolute;
            top: 12px;
            right: 24px;
            width: 7px;
            height: 12px;
            border: solid #137333;
            border-radius: 2px;
            border-width: 0 3px 3px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
            content: '';
          }
        `
      : css``}
  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayD};
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;
const StyledBottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 0 40px;
  margin: 0;
  height: 150px;
  ${({ theme }) => theme.media.tablet`
    padding: 0;
  `}
  ${({ theme }) => theme.media.mobile`
    padding: 0;
  `}
`;
const StyledPrevButton = styled.button`
  text-transform: capitalize;
  flex: 1 0 49%;
  padding-top: 24px;
  padding-left: 10px;
  font-weight: 600;
  text-align: left;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  &:disabled {
    color: ${({ theme }) => theme.colors.grayC};
  }
  ${({ theme }) => theme.media.tablet`
    padding-top: 0px;
  `}
  ${({ theme }) => theme.media.mobile`
    padding-top: 0px;
  `}
`;
const StyledNextButton = styled.button`
  text-transform: capitalize;
  flex: 1 0 49%;
  padding-top: 24px;
  padding-right: 10px;
  font-weight: 600;
  text-align: right;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  &:disabled {
    color: ${({ theme }) => theme.colors.grayC};
  }
  ${({ theme }) => theme.media.tablet`
    padding-top: 0px;
  `}
  ${({ theme }) => theme.media.mobile`
    padding-top: 0px;
  `}
`;

/**
 * 1-6번, 10-12번의 경우 전혀 아니다를 1로 시작해서 매우 그렇다를 5로 두고,
 * 7-9번은 전혀 아니다 5로 시작해서 매우 그렇다를 1로 두고 계산합니다.
 * 각 성격타입은 다음과 같으며, 해당 문항을 더한 것이 자신의 점수입니다.
 * 외향성 1+6
 * 신경성 5+10
 * 성실성 4+9
 * 친화성 2+7+12
 * 개방성 3+8+11
 */
const testList = [
  {
    question: '모르는 사람에게 먼저 말을 건다',
    type: 'extraversion'
  },
  {
    question: '다른 사람이 편안하고 행복한지 확인한다',
    type: 'agreeableness'
  },
  {
    question: '그림, 글, 음악을 창작한다',
    type: 'openness to experience'
  },
  {
    question: '모든 일을 사전에 준비한다',
    type: 'conscientiousness'
  },
  {
    question: '울적하거나 우울함을 느낀다',
    type: 'neuroticism'
  },
  {
    question: '회식, 파티, 사교모임을 계획한다',
    type: 'extraversion'
  },
  {
    question: '사람들을 모욕한다',
    type: 'agreeableness',
    reverse: true
  },
  {
    question: '철학적이거나 영적인 문제들을 생각한다',
    type: 'openness to experience',
    reverse: true
  },
  {
    question: '일이나 물건을 정리하지 않고 어지럽게 그냥 둔다',
    type: 'conscientiousness',
    reverse: true
  },
  {
    question: '스트레스나 걱정을 느낀다',
    type: 'neuroticism'
  },
  {
    question: '어려운 단어를 사용한다',
    type: 'openness to experience'
  },
  {
    question: '타인의 감정에 공감한다',
    type: 'agreeableness'
  }
];

const strValues = [
  '전혀 아니다',
  '별로 아니다',
  '보통이다',
  '약간 그렇다',
  '매우 그렇다'
];

// type TestItem = typeof testList

export const Test: React.FC = () => {
  const { t } = useTranslation();

  const [processIndex, setProcessIndex] = useState<number>(0);
  const [valueList, setValueList] = useState<number[]>([]);
  const MAX_SCORE = 5;

  useEffect(() => {
    setValueList(testList.map(() => -1));
  }, []);

  return (
    <StyledWrapper>
      <StyledTitle>
        {t('txt-select-big5-test-title')} {processIndex + 1} / {testList.length}
      </StyledTitle>
      {testList.map((item, index) => (
        <StyledQuestionWrapper
          key={index}
          style={{ display: index === processIndex ? 'inherit' : 'none' }}
        >
          <StyledQuestion>{item.question}</StyledQuestion>
          {strValues.map((subItem, subIndex) => (
            <StyledExample
              key={subIndex}
              selected={
                valueList[index] ===
                (item.reverse ? MAX_SCORE - subIndex : subIndex + 1)
              }
              onClick={() => {
                const tmp = [...valueList];
                tmp[index] = item.reverse ? MAX_SCORE - subIndex : subIndex + 1;
                setValueList(tmp);
              }}
            >
              {subItem}
            </StyledExample>
          ))}
        </StyledQuestionWrapper>
      ))}
      <StyledBottomWrapper>
        <StyledPrevButton
          type="button"
          disabled={processIndex === 0}
          onClick={() => {
            const tmp = [...valueList];
            tmp[processIndex] = -1;
            setValueList(tmp);
            setProcessIndex((prev) => prev - 1);
          }}
        >
          {t('prev')}
        </StyledPrevButton>
        <StyledNextButton
          type="button"
          disabled={valueList[processIndex] === -1}
          onClick={() =>
            processIndex + 1 === testList.length
              ? alert('결과창 이동')
              : setProcessIndex((prev) => prev + 1)
          }
        >
          {processIndex + 1 === testList.length ? '결과보기' : t('next')}
        </StyledNextButton>
      </StyledBottomWrapper>
      {/* <div>{valueList.join(', ')}</div> */}
    </StyledWrapper>
  );
};

export default Test;
