import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import styled, { css } from 'styled-components';
import { useTranslation } from 'react-i18next';

import reducerTest from '../../reducers/reducerTest';

export const Result: React.FC = () => {
  const { t } = useTranslation();

  const { testInfo } = reducerTest();

  useEffect(() => {}, []);

  return (
    <div style={{ backgroundColor: 'black', color: 'white' }}>
      {testInfo.get.newbie ? 'true' : 'false'}
      <br />
      {testInfo.get.firstClass}
      <br />
      {testInfo.get.firstTalent}
      <br />
      {testInfo.get.secondClass}
      <br />
      {testInfo.get.secondTalent}
      <br />
      {testInfo.get.thirdClass}
      <br />
      {testInfo.get.thirdTalent}
      <br />
      {Math.ceil(
        (testInfo.get.agreeablenessScore / testInfo.get.agreeablenessCount) *
          100
      ) / 100}
      <br />
      {Math.ceil(
        (testInfo.get.conscientiousnessScore /
          testInfo.get.conscientiousnessCount) *
          100
      ) / 100}
      <br />
      {Math.ceil(
        (testInfo.get.extraversionScore / testInfo.get.extraversionCount) * 100
      ) / 100}
      <br />
      {Math.ceil(
        (testInfo.get.opennessToExperienceScore /
          testInfo.get.opennessToExperienceCount) *
          100
      ) / 100}
      <br />
      {Math.ceil(
        (testInfo.get.neuroticismScore / testInfo.get.neuroticismCount) * 100
      ) / 100}
      <br />
    </div>
  );
};

export default Result;
