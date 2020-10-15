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
const StyledWowClassIcon = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border-radius: 40%;
  border: 2px solid ${({ theme }) => theme.colors.warning};
`;
const StyledSelectedWowwowClassList = styled.div`
  flex: 1 1 100%;
  height: 40px;
  line-height: 40px;
  color: ${({ theme }) => theme.colors.danger};
  border: 1px solid #fff;
`;

type SelectedWowClassType = ParamWowClassInfo & {
  selected: boolean;
};

export const Class: React.FC = () => {
  const { t } = useTranslation();
  const [selectedWowClass, setSelectedWowClass] = useState<
    SelectedWowClassType[]
  >([]);

  const toastForNewbie = () => {
    toast.error(t('please-select-talent'), {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined
    });
  };

  return (
    <StyledWrapper>
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
                <StyledWowClassTalentItem key={subIndex}>
                  {t(subItem.name)}
                </StyledWowClassTalentItem>
              ))}
          </StyledWowClassTalents>
        </StyledWowClassItem>
      ))}
      <StyledSelectedWowwowClassList>
        {selectedWowClass.length === 0 ? (
          <div>직업을 최소 1개 이상 선택해주십시오.</div>
        ) : (
          <></>
        )}
      </StyledSelectedWowwowClassList>
    </StyledWrapper>
  );
};

export default Class;
