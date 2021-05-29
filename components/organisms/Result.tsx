import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Router from 'next/router';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import ReactEcharts from 'echarts-for-react';
import Theme from '../../styles/theme';
import WowClassInfo from '../../lib/WowClassInfo';
import API from '../../lib/info.json';

import Button from '../atoms/Button';
import Loader from '../atoms/Loader';

import reducerTest from '../../reducers/reducerTest';

const StyledResult = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;
const StyledResultTitle = styled.div`
  width: 100%;
  flex: 0 0 100%;
  font-weight: 600;
  margin-bottom: 10px;
`;
const StyledResultList = styled.ul`
  width: 100%;
  flex: 0 0 100%;
  & > li {
    width: 100%;
    display: flex;
    padding: 4px 0;
    justify-content: center;

    & > div.icon {
      flex: 0 0 40px;
    }
    & > div.name {
      flex: 0 0 100px;
      padding-left: 10px;
      max-width: 100px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    & > div.progress {
      flex: 1 1 auto;
      padding: 4px;
      & > div.progressBar {
        height: calc(100% - 8px);
        border-radius: 4px;
      }
    }
    & > div.value {
      flex: 0 0 40px;
      text-align: right;
    }
  }
`;

const wowClassIconWidth = 40;
const StyledWowClassIcon = styled.img`
  width: ${wowClassIconWidth}px;
  height: ${wowClassIconWidth}px;
  border-radius: 40%;
  border: 2px solid ${({ theme }) => theme.colors.warning};
`;

type testResult = {
  sClass: string;
  sTalent: string;
  nCount: number;
};
export const Result: React.FC = () => {
  const { t } = useTranslation();
  const { testInfo } = reducerTest();
  const [result, setResult] = useState<testResult[]>([]);

  const [agree, setAgree] = useState<number>(1);
  const [consc, setConsc] = useState<number>(1);
  const [extra, setExtra] = useState<number>(1);
  const [openn, setOpenn] = useState<number>(1);
  const [neuro, setNeuro] = useState<number>(1);

  const [sum, setSum] = useState<number>(0);
  const [more, setMore] = useState<boolean>(false);

  const parseRange = (val: number) => {
    if (val >= 1 && val < 2.5) return 1;
    if (val >= 2.5 && val <= 3.5) return 3;
    if (val > 3.5 && val <= 5) return 5;
    return 0;
  };

  useEffect(() => {
    let unmount = false;

    const onLoadApi = async () => {
      if (testInfo.get.firstClass !== '') {
        const _agree = parseRange(testInfo.get.agreeablenessScore / testInfo.get.agreeablenessCount);
        const _consc = parseRange(testInfo.get.conscientiousnessScore / testInfo.get.conscientiousnessCount);
        const _extra = parseRange(testInfo.get.extraversionScore / testInfo.get.extraversionCount);
        const _openn = parseRange(testInfo.get.opennessToExperienceScore / testInfo.get.opennessToExperienceCount);
        const _neuro = parseRange(testInfo.get.neuroticismScore / testInfo.get.neuroticismCount);

        await axios
          .post(API.path, null, {
            params: {
              bNew: testInfo.get.newbie,
              bClassic: testInfo.get.classic,
              sFirstClass: testInfo.get.firstClass,
              sFirstTalent: testInfo.get.firstTalent,
              sSecondClass: testInfo.get.secondClass,
              sSecondTalent: testInfo.get.secondTalent,
              sThirdClass: testInfo.get.thirdClass,
              sThirdTalent: testInfo.get.thirdTalent,
              nAgreeableness: _agree,
              nConscientiousness: _consc,
              nExtraversion: _extra,
              nOpennessToExperience: _openn,
              nNeuroticism: _neuro
            }
          })
          .then((response) => {
            if (unmount) return;
            if (response.status === 200) {
              setResult(response.data);
            } else {
              setResult(undefined);
            }
          })
          .catch((error) => {
            if (unmount) return;
            console.error(error);
          })
          .finally(() => {
            setAgree(_agree);
            setConsc(_consc);
            setExtra(_extra);
            setOpenn(_openn);
            setNeuro(_neuro);
          });
      }
    };

    onLoadApi();

    return () => {
      unmount = true;
    };
  }, []);

  useEffect(() => {
    if (result.length > 2) setSum(result.map((el) => el.nCount).reduce((a, b) => a + b));
  }, [result]);

  const getOption = () => {
    return {
      title: {
        text: t('txt-select-big5-test-title'),
        show: false
      },
      grid: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
        // show: true,
        // borderColor: _color,
        // borderWidth: '2'
      },
      radar: {
        // shape: 'circle',
        indicator: [
          { name: t('agreeableness'), max: 5 },
          { name: t('conscientiousness'), max: 5 },
          { name: t('extraversion'), max: 5 },
          { name: t('opennessToExperience'), max: 5 },
          { name: t('neuroticism'), max: 5 }
        ],
        splitNumber: 5,
        splitArea: {
          areaStyle: {
            color: ['#3f3c54', '#373652'],
            shadowColor: 'rgba(0, 0, 0, 0.2)',
            shadowBlur: 10
          }
        },
        axisLine: {
          lineStyle: {
            color: Theme.colors.white,
            opacity: 0.4
          }
        },
        splitLine: {
          lineStyle: {
            color: Theme.colors.white,
            opacity: 0.4
          }
        }
      },
      color: ['#7cffb2'],
      series: [
        {
          name: 'Big 5 test.',
          type: 'radar',
          symbolSize: 10,
          lineStyle: {
            width: 4
          },
          data: [
            {
              value: [agree, consc, extra, openn, neuro],
              name: 'You.'
            }
          ]
        }
      ]
    };
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {testInfo.get.firstClass === '' && (
        <>
          <Button onClick={() => Router.push('/')}>다시하기</Button>
          성향 정보가 없습니다. 다시 테스트해주세요.
        </>
      )}
      {testInfo.get.firstClass !== '' && result.length === 0 && (
        <>
          <Loader style={{ marginBottom: '20px' }} />
          성향과 비슷한 직업을 찾고 있습니다.
        </>
      )}
      {testInfo.get.firstClass !== '' && result.length > 0 && (
        <>
          <StyledResult>
            <StyledResultTitle>당신의 성향</StyledResultTitle>
            <ReactEcharts
              option={getOption()}
              notMerge={true}
              lazyUpdate={true}
              style={{
                height: '360px',
                width: '360px',
                position: 'relative'
              }}
            />
          </StyledResult>
          <StyledResult>
            <StyledResultTitle>성향별 직업 선호도</StyledResultTitle>
            <StyledResultList>
              {result.map((el: testResult, elIdx: number) => {
                if (!more && elIdx > 4) return undefined;

                const _class = WowClassInfo.find((v) => v.name == el.sClass);
                const _talent = _class.talents.find((v) => v.name == el.sTalent);

                return (
                  <li key={elIdx}>
                    <div className={'icon'}>
                      <StyledWowClassIcon className="img" src={`/class/${_talent.image}`} alt={`${t(_class.name)} - ${_talent.name}`} />
                    </div>
                    <div className={'name'}>
                      {t(el.sClass)}
                      <br />
                      {t(el.sTalent)}
                    </div>
                    <div className={'progress'}>
                      <div className={'progressBar'} style={{ width: Math.round((el.nCount / sum) * 10000) / 100 + '%', backgroundColor: _class.color }}></div>
                    </div>
                    <div className={'value'}>{Math.round((el.nCount / sum) * 10000) / 100}%</div>
                  </li>
                );
              })}
              {result.length > 5 && !more && (
                <li>
                  <Button onClick={() => setMore(true)}>더 보기</Button>
                </li>
              )}
            </StyledResultList>
          </StyledResult>
          <Button primary onClick={() => Router.push('/')}>
            다시하기
          </Button>
        </>
      )}
    </div>
  );
};

export default Result;
