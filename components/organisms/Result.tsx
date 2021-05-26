import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Router from 'next/router';
import styled, { css } from 'styled-components';
import { useTranslation } from 'react-i18next';

import Button from '../atoms/Button';
import Loader from '../atoms/Loader';

import reducerTest from '../../reducers/reducerTest';

export const Result: React.FC = () => {
  const { t } = useTranslation();
  const { testInfo } = reducerTest();
  const [result, setResult] = useState<any>(undefined);

  useEffect(() => {
    let unmount = false;
    const onLoadApi = async () => {
      if (testInfo.get.firstClass !== '') {
        await axios
          .post('https://hkm37mddb1.execute-api.ap-northeast-2.amazonaws.com/api_wow_big5', null, {
            params: {
              bNew: testInfo.get.newbie,
              sFirstClass: testInfo.get.firstClass,
              sFirstTalent: testInfo.get.firstTalent,
              sSecondClass: testInfo.get.secondClass,
              sSecondTalent: testInfo.get.secondTalent,
              sThirdClass: testInfo.get.thirdClass,
              sThirdTalent: testInfo.get.thirdTalent,
              nAgreeableness: `${
                Math.ceil((testInfo.get.agreeablenessScore / testInfo.get.agreeablenessCount) * 100) / 100
              }`,
              nConscientiousness: `${
                Math.ceil((testInfo.get.conscientiousnessScore / testInfo.get.conscientiousnessCount) * 100) / 100
              }`,
              nExtraversion: `${
                Math.ceil((testInfo.get.extraversionScore / testInfo.get.extraversionCount) * 100) / 100
              }`,
              nOpennessToExperience: `${
                Math.ceil((testInfo.get.opennessToExperienceScore / testInfo.get.opennessToExperienceCount) * 100) / 100
              }`,
              nNeuroticism: `${Math.ceil((testInfo.get.neuroticismScore / testInfo.get.neuroticismCount) * 100) / 100}`
            }
          })
          .then((response) => {
            if (unmount) return;
            console.log(response.data);
            if (response.status === 200) {
              console.log(response.data);
              setResult(response);
            } else {
              setResult(undefined);
            }
          })
          .catch((error) => {
            if (unmount) return;
            console.log('error', error);
          });
        // await axios
        //   .get('https://hkm37mddb1.execute-api.ap-northeast-2.amazonaws.com/big5-get', {
        //     params: {
        //       bNew: testInfo.get.newbie,
        //       sFirstClass: testInfo.get.firstClass,
        //       sFirstTalent: testInfo.get.firstTalent,
        //       sSecondClass: testInfo.get.secondClass,
        //       sSecondTalent: testInfo.get.secondTalent,
        //       sThirdClass: testInfo.get.thirdClass,
        //       sThirdTalent: testInfo.get.thirdTalent,
        //       nAgreeableness:
        //         Math.ceil((testInfo.get.agreeablenessScore / testInfo.get.agreeablenessCount) * 100) / 100,
        //       nConscientiousness:
        //         Math.ceil((testInfo.get.conscientiousnessScore / testInfo.get.conscientiousnessCount) * 100) / 100,
        //       nExtraversion: Math.ceil((testInfo.get.extraversionScore / testInfo.get.extraversionCount) * 100) / 100,
        //       nOpennessToExperience:
        //         Math.ceil((testInfo.get.opennessToExperienceScore / testInfo.get.opennessToExperienceCount) * 100) /
        //         100,
        //       nNeuroticism: Math.ceil((testInfo.get.neuroticismScore / testInfo.get.neuroticismCount) * 100) / 100
        //     }
        //   })
        //   .then((response) => {
        //     if (unmount) return;
        //     if (response.status === 200) {
        //       console.log(response.data);
        //       setResult(response);
        //     } else {
        //       setResult(undefined);
        //     }
        //   })
        //   .catch((error) => {
        //     if (unmount) return;
        //     console.log('error', error);
        //   });
      }
      // await axios
      //   .get('https://hkm37mddb1.execute-api.ap-northeast-2.amazonaws.com/big5-get', {
      //     params: {
      //       nAgreeableness: '2.5',
      //       nConscientiousness: '2.5',
      //       nExtraversion: '2.5',
      //       nOpennessToExperience: '2.5',
      //       nNeuroticism: '2.5'
      //     }
      //   })
      //   .then((response) => {
      //     if (unmount) return;
      //     if (response.status === 200) {
      //       console.log(response.data);
      //       setResult(response);
      //     } else {
      //       setResult(undefined);
      //     }
      //   })
      //   .catch((error) => {
      //     if (unmount) return;
      //     console.log('error', error);
      //   });
    };

    onLoadApi();

    return () => {
      unmount = true;
    };
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {testInfo.get.firstClass === '' && (
        <>
          <Button onClick={() => Router.push('/')}>다시하기</Button>
          성향 정보가 없습니다. 다시 테스트해주세요.
        </>
      )}
      {testInfo.get.firstClass !== '' && result === undefined && (
        <>
          <Loader style={{ marginBottom: '20px' }} />
          성향과 비슷한 직업을 찾고 있습니다.
        </>
      )}
      {testInfo.get.firstClass !== '' && result && <>결과</>}
    </div>
  );
};

export default Result;
