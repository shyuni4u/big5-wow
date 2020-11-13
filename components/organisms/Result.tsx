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
      {testInfo.get.agreeablenessCount} : {testInfo.get.agreeablenessScore}
      <br />
      {testInfo.get.conscientiousnessCount} :{' '}
      {testInfo.get.conscientiousnessScore}
      <br />
      {testInfo.get.extraversionCount} : {testInfo.get.extraversionScore}
      <br />
      {testInfo.get.opennessToExperienceCount} :{' '}
      {testInfo.get.opennessToExperienceScore}
      <br />
      {testInfo.get.neuroticismCount} : {testInfo.get.neuroticismScore}
      <br />
    </div>
  );
};

export default Result;
