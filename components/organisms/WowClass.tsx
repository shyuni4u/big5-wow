import React, { useState } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import { toast } from 'react-toastify';

import Panel from '../atoms/Panel';
import Button from '../atoms/Button';

import wowClassList, { ParamWowClassInfo } from '../../lib/WowClassInfo';

const StyledWowClassItem = styled.div`
  position: relative;
  flex: 0 1 200px;
  height: 70px;
  margin-bottom: 10px;
`;
const StyledWowClassName = styled.div`
  position: absolute;
  top: 0;
  left: 50px;
  font-size: ${({ theme }) => theme.fontSizes.cation12};
`;
const StyledWowClassTalents = styled.div`
  position: absolute;
  top: 18px;
  left: 50px;
  width: calc(100% - 50px);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const StyledWowClassTalentItem = styled.div`
  display: flex;
  text-transform: capitalize;
  flex: 0 0 50%;
  font-size: ${({ theme }) => theme.fontSizes.body14};
  cursor: pointer;
  ${({ theme }) => theme.media.tablet`
    padding-bottom: 8px;
  `}
  ${({ theme }) => theme.media.mobile`
    padding-bottom: 8px;
  `}
`;

const wowClassIconWidth = 40;
const StyledWowClassIcon = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: ${wowClassIconWidth}px;
  height: ${wowClassIconWidth}px;
  border-radius: 40%;
  border: 2px solid ${({ theme }) => theme.colors.warning};
`;
const StyledPositionIcon = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 4px;
  margin-top: 2px;
`;

const StyledSelectedWowClassList = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: space-around;
`;
const StyledSelectedWowClassListEmpty = styled.span`
  color: ${({ theme }) => theme.colors.danger};
  height: 40px;
  line-height: 40px;
  overflow: hidden;
`;

const StyledSelectedWowClassItem = styled.div`
  position: relative;
  display: inline-block;
  flex: 0 0 33%;
  min-height: ${wowClassIconWidth}px;
  cursor: pointer;
  ${({ theme }) => theme.media.tablet`
    margin-bottom: 10px;
  `}
  ${({ theme }) => theme.media.mobile`
    margin-bottom: 10px;
  `}
`;
const StyledWowSelectedClassName = styled.div`
  position: absolute;
  top: 20px;
  left: ${wowClassIconWidth + 5}px;
  line-height: ${wowClassIconWidth / 2}px;
  height: ${wowClassIconWidth / 2}px;
  width: calc(100% - ${wowClassIconWidth + 5}px);
  font-size: ${({ theme }) => theme.fontSizes.body14};
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const StyledSelectedWowClassTalent = styled.div`
  position: absolute;
  top: 0px;
  left: ${wowClassIconWidth + 5}px;
  text-transform: capitalize;
  line-height: ${wowClassIconWidth / 2}px;
  height: ${wowClassIconWidth / 2}px;
  width: calc(100% - ${wowClassIconWidth + 5}px);
  font-size: ${({ theme }) => theme.fontSizes.body14};
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const MAX_SELECT = 3;

export const Class: React.FC = () => {
  const { t } = useTranslation();
  const [selectedWowClass, setSelectedWowClass] = useState<ParamWowClassInfo[]>(
    []
  );

  const toastForNewbie = () => {
    toast.error(t('tw-please-select-talent'), {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined
    });
  };

  const selectWowClass = (wowClass: any, talent: any) => {
    if (
      selectedWowClass.some(
        (el) => el.name === wowClass.name && el.talent === talent.name
      )
    ) {
      //  Do nothing.
    } else if (selectedWowClass.length === MAX_SELECT) {
      toast.error(t('tw-max-select', { max: MAX_SELECT }), {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined
      });
    } else {
      const temp: ParamWowClassInfo = {
        name: wowClass.name,
        color: wowClass.color,
        talent: talent.name,
        position: talent.position
      };
      setSelectedWowClass((old) => [...old, temp]);
    }
  };

  const unselectWowClass = (item: ParamWowClassInfo) => {
    setSelectedWowClass(
      selectedWowClass.filter(
        (el) => !(el.name === item.name && el.talent === item.talent)
      )
    );
  };

  return (
    <>
      <div style={{ marginBottom: '10px' }}></div>
      <Panel>
        <h3 className={'panel-sub-title'}>하고 싶은 직업을 선택하세요.</h3>
        <div style={{ marginBottom: '10px' }}></div>
        <h2 className={'panel-title'}>와우 직업 선택</h2>
        <div style={{ marginBottom: '10px' }}></div>
        <div
          className={'panel-text'}
          style={{ display: 'flex', flexWrap: 'wrap' }}
        >
          {wowClassList.map((item, index) => (
            <StyledWowClassItem key={index} style={{ color: item.color }}>
              <StyledWowClassName onClick={() => toastForNewbie()}>
                {t(item.name)}
              </StyledWowClassName>
              {item.image && (
                <StyledWowClassIcon
                  src={`/class/${item.image}.jpg`}
                  alt={t(item.name)}
                  onClick={() => toastForNewbie()}
                />
              )}
              <StyledWowClassTalents>
                {item.talents &&
                  item.talents.map((subItem, subIndex) => (
                    <StyledWowClassTalentItem
                      key={subIndex}
                      onClick={() => selectWowClass(item, subItem)}
                    >
                      <StyledPositionIcon
                        src={`/class/${subItem.position}.svg`}
                        alt={t(subItem.position)}
                      />
                      {t(subItem.name)}
                    </StyledWowClassTalentItem>
                  ))}
              </StyledWowClassTalents>
            </StyledWowClassItem>
          ))}
        </div>
      </Panel>
      <Panel>
        <StyledSelectedWowClassList>
          {selectedWowClass.length === 0 ? (
            <StyledSelectedWowClassListEmpty>
              {t('tw-select-wow-class')}
            </StyledSelectedWowClassListEmpty>
          ) : (
            selectedWowClass.map((item, index) => (
              <StyledSelectedWowClassItem
                key={index}
                style={{ color: item.color }}
                onClick={() => unselectWowClass(item)}
              >
                <StyledWowSelectedClassName>
                  {t(item.name)}
                </StyledWowSelectedClassName>
                {item.name && (
                  <StyledWowClassIcon
                    src={`/class/${item.name}.jpg`}
                    alt={t(item.name)}
                  />
                )}
                <StyledSelectedWowClassTalent>
                  {t(item.talent)}
                </StyledSelectedWowClassTalent>
              </StyledSelectedWowClassItem>
            ))
          )}
        </StyledSelectedWowClassList>
      </Panel>
      <div style={{ width: '100%', textAlign: 'center' }}>
        <Button
          onClick={() => {
            if (selectedWowClass.length > 0) {
              Router.push({
                pathname: './test',
                query: { newbie: true }
              });
            }
          }}
        >
          성향 검사 시작
        </Button>
      </div>
    </>
  );
};

export default Class;
