import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import { toast } from 'react-toastify';

import wowClassList, { ParamWowClassInfo } from '../../lib/WowClassInfo';

const StyledWrapper = styled.article`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 40px;
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.media.tablet`
    flex-direction: column;
    padding: 15px;
  `}
  ${({ theme }) => theme.media.mobile`
    flex-direction: column;
    padding: 15px;
  `}
`;
const StyledTitle = styled.h2`
  flex: 1 1 100%;
  font-size: ${({ theme }) => theme.fontSizes.h2};
  color: ${({ theme }) => theme.colors.white};
  margin: 20px 0 20px;
  ${({ theme }) => theme.media.tablet`
    margin: 20px 0 10px;
  `}
  ${({ theme }) => theme.media.mobile`
    margin: 20px 0 10px;
  `}
`;
const StyledWowClassItem = styled.div`
  position: relative;
  flex: 1 1 50%;
  min-height: 70px;
  ${({ theme }) => theme.media.tablet`
    flex: 1 1 100%;
  `}
  ${({ theme }) => theme.media.mobile`
    flex: 1 1 100%;
  `}
`;
const StyledWowClassName = styled.div`
  position: absolute;
  top: 0;
  left: 50px;
  font-size: ${({ theme }) => theme.fontSizes.cation12};
`;
const StyledWowClassTalents = styled.div`
  position: absolute;
  top: 12px;
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
  padding-top: 5px;
  font-size: ${({ theme }) => theme.fontSizes.body14};
  cursor: pointer;
  ${({ theme }) => theme.media.tablet`
    padding-top: 5px;
    padding-bottom: 8px;
  `}
  ${({ theme }) => theme.media.mobile`
    padding-top: 5px;
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
`;
const StyledSelectedWowClassList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: ${wowClassIconWidth}px;
  line-height: ${wowClassIconWidth}px;
  border: 2px solid ${({ theme }) => theme.colors.danger};
  padding: 5px;
`;
const StyledSelectedWowClassListEmpty = styled.span`
  color: ${({ theme }) => theme.colors.danger};
  padding-left: 12px;
  ${({ theme }) => theme.media.tablet`
    margin-bottom: 5px;
  `}
  ${({ theme }) => theme.media.mobile`
    margin-bottom: 5px;
  `}
`;

const selectedWowClassItemWidth = 120;
const StyledSelectedWowClassItem = styled.div`
  position: relative;
  display: inline-block;
  flex: 0 0 ${selectedWowClassItemWidth}px;
  min-height: ${wowClassIconWidth}px;
  cursor: pointer;
  ${({ theme }) => theme.media.tablet`
    flex: 0 0 50%;
    margin-bottom: 5px;
  `}
  ${({ theme }) => theme.media.mobile`
    flex: 0 0 50%;
    margin-bottom: 5px;
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
    <StyledWrapper>
      <StyledTitle>{t('txt-select-wow-class-title')}</StyledTitle>
      {wowClassList.map((item, index) => (
        <StyledWowClassItem key={index} style={{ color: item.color }}>
          <StyledWowClassName onClick={() => toastForNewbie()}>
            {t(item.name)}
          </StyledWowClassName>
          {item.image && (
            <StyledWowClassIcon
              src={`/${item.image}.jpg`}
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
                    src={`/${subItem.position}.svg`}
                    alt={t(subItem.position)}
                  />
                  {t(subItem.name)}
                </StyledWowClassTalentItem>
              ))}
          </StyledWowClassTalents>
        </StyledWowClassItem>
      ))}
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
                  src={`/${item.name}.jpg`}
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
    </StyledWrapper>
  );
};

export default Class;
