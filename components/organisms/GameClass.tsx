import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

import Panel from '@components/atoms/Panel'
import Button from '@components/atoms/Button'
import Modal from '@components/atoms/Modal'

import { useDispatch, useSelector } from 'react-redux'
import { set, selectTest } from 'redux-slice/test'

import GameClassList, { GameClassItemInfo, ParamGameClassInfo } from '@lib/GameClassInfo'

const StyledGameClassItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex: 0 1 200px;
  margin: 5px 2px;
  user-select: none;
  cursor: pointer;
  & > span {
    font-size: ${({ theme }) => theme.fontSizes.h3};
    font-weight: 600;
  }
`
const StyledGameClassTalents = styled.ul`
  background-color: rgba(53, 32, 17, 0.8);
  border: 1px solid #f8b700;
  box-shadow: inset 0 -8px 0 #f8b700;
  padding: 20px;
  margin-top: 20px;
  user-select: none;
  cursor: pointer;

  &:hover {
    background-color: #9e661c;
  }

  & > .talentInfo {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
    & > .img {
      width: 30px;
      height: 30px;
      /* border-radius: 40%;
      border: 2px solid ${({ theme }) => theme.colors.warning}; */
      border: 1px solid #888;
      margin-right: 10px;
      background-color: #000;
    }
    & > .name {
      font-size: ${({ theme }) => theme.fontSizes.h3};
    }
    & > .pos {
      width: 14px;
      height: 14px;
      margin-left: 6px;
    }
  }
  & > .desc {
  }
`

const GameClassIconWidth = 40
const StyledGameClassIcon = styled.img`
  width: ${GameClassIconWidth}px;
  height: ${GameClassIconWidth}px;
  border-radius: 40%;
  border: 2px solid ${({ theme }) => theme.colors.warning};
  margin-right: 10px;
`

const StyledSelectedGameClassList = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: space-around;
`
const StyledSelectedGameClassListEmpty = styled.span`
  color: ${({ theme }) => theme.colors.danger};
  height: 40px;
  line-height: 40px;
  overflow: hidden;
`

const StyledSelectedGameClassItem = styled.div`
  position: relative;
  display: inline-block;
  flex: 0 0 33%;
  min-height: ${GameClassIconWidth}px;
  cursor: pointer;

  & > div.close {
    position: absolute;
    top: 0px;
    right: 14px;
    width: 20px;
    height: 20px;
    color: #fff;
    border: 1px solid #fff;
    background-color: red;
    font-weight: 600;
    border-radius: 4px;
    opacity: 0.7;
  }

  ${({ theme }) => theme.media.tablet`
    margin-bottom: 10px;
  `}
  ${({ theme }) => theme.media.mobile`
    margin-bottom: 10px;
  `}
`
const StyledGameSelectedClassName = styled.div`
  position: absolute;
  top: 20px;
  left: ${GameClassIconWidth + 5}px;
  line-height: ${GameClassIconWidth / 2}px;
  height: ${GameClassIconWidth / 2}px;
  width: calc(100% - ${GameClassIconWidth + 5}px);
  font-size: ${({ theme }) => theme.fontSizes.body14};
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
const StyledSelectedGameClassTalent = styled.div`
  position: absolute;
  top: 0px;
  left: ${GameClassIconWidth + 5}px;
  text-transform: capitalize;
  line-height: ${GameClassIconWidth / 2}px;
  height: ${GameClassIconWidth / 2}px;
  width: calc(100% - ${GameClassIconWidth + 5}px);
  font-size: ${({ theme }) => theme.fontSizes.body14};
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const MAX_SELECT = 3

export const GameClass: React.FC = () => {
  const { t, i18n } = useTranslation()

  const dispatch = useDispatch()
  const test = useSelector(selectTest)

  const [talentList, setTalentList] = useState<GameClassItemInfo>(undefined)
  const [selectedGameClass, setSelectedGameClass] = useState<ParamGameClassInfo[]>([])
  const [showTalent, setShowTalent] = useState<boolean>(false)

  useEffect(() => {
    i18n.changeLanguage(window.localStorage.getItem('lang') || 'en')
  }, [])

  const selectGameClass = (wowClass: any, talent: any) => {
    if (selectedGameClass.some((el) => el.name === wowClass.name && el.talent === talent.name)) {
      //  Do nothing.
    } else if (selectedGameClass.length === MAX_SELECT) {
      toast.error(t('gameclass.maxSelectText', { max: MAX_SELECT }), {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined
      })
    } else {
      const temp: ParamGameClassInfo = {
        name: wowClass.name,
        color: wowClass.color,
        talent: talent.name,
        position: talent.position
      }
      setSelectedGameClass((old) => [...old, temp])
    }
    setShowTalent(false)
  }

  const unselectGameClass = (item: ParamGameClassInfo) => {
    setSelectedGameClass(selectedGameClass.filter((el) => !(el.name === item.name && el.talent === item.talent)))
  }

  const goTest = () => {
    const temp = {
      firstClass: '',
      firstTalent: '',
      secondClass: '',
      secondTalent: '',
      thirdClass: '',
      thirdTalent: ''
    }
    if (selectedGameClass.length > 2) {
      temp.thirdClass = selectedGameClass[2].name
      temp.thirdTalent = selectedGameClass[2].talent
    }
    if (selectedGameClass.length > 1) {
      temp.secondClass = selectedGameClass[1].name
      temp.secondTalent = selectedGameClass[1].talent
    }
    if (selectedGameClass.length > 0) {
      temp.firstClass = selectedGameClass[0].name
      temp.firstTalent = selectedGameClass[0].talent
    }
    dispatch(set({ ...test, ...temp }))
    Router.push('./result')
  }

  return (
    <>
      <div style={{ marginBottom: '10px' }} />
      <Panel>
        <h3 className="panel-sub-title">{t('gameclass.selectClassComment')}</h3>
        <h2 className="panel-title">{t('gameclass.selectClassTitle')}</h2>
        <div className="panel-text" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {GameClassList.map((item, index) => (
            <StyledGameClassItem
              key={index}
              style={{ color: item.color }}
              onClick={() => {
                setTalentList(item)
                setShowTalent(true)
              }}
            >
              {item.image && <StyledGameClassIcon src={`/class/${item.image}.jpg`} alt={t(`gameclass.${item.name}`)} />}
              <span>{t(`gameclass.${item.name}`)}</span>
            </StyledGameClassItem>
          ))}
        </div>
      </Panel>
      <Panel>
        <StyledSelectedGameClassList>
          {selectedGameClass.length === 0 ? (
            <StyledSelectedGameClassListEmpty>{t('gameclass.selectClassEmpty')}</StyledSelectedGameClassListEmpty>
          ) : (
            selectedGameClass.map((item, index) => (
              <StyledSelectedGameClassItem key={index} style={{ color: item.color }} onClick={() => unselectGameClass(item)}>
                <div className={'close'}>X</div>
                <StyledGameSelectedClassName>{t(`gameclass.${item.name}`)}</StyledGameSelectedClassName>
                {item.name && <StyledGameClassIcon src={`/class/${item.name}.jpg`} alt={t(`gameclass.${item.name}`)} />}
                <StyledSelectedGameClassTalent>{t(`gameclass.${item.talent}`)}</StyledSelectedGameClassTalent>
              </StyledSelectedGameClassItem>
            ))
          )}
        </StyledSelectedGameClassList>
      </Panel>
      <div style={{ width: '100%', textAlign: 'center' }}>
        <Button
          onClick={() => {
            if (selectedGameClass.length > 0) {
              goTest()
            }
          }}
        >
          {t('gameclass.goResult')}
        </Button>
      </div>
      <Modal show={showTalent} onClose={() => setShowTalent(false)}>
        {talentList &&
          talentList.talents.map((item, index) => (
            <StyledGameClassTalents key={index} onClick={() => selectGameClass({ name: talentList.name, color: talentList.color }, item)}>
              <li className="talentInfo">
                <img className="img" src={`/class/${item.image}`} alt={t(`gameclass.${item.name}`)} />
                <span className="name">{t(`gameclass.${item.name}`)}</span>
                <img className="pos" src={`/class/${item.position}.svg`} alt={t(`gameclass.${item.position}`)} />
              </li>
              <li className="desc">{t(`gameclass.${item.desc}`)}</li>
            </StyledGameClassTalents>
          ))}
        <div style={{ width: '100%', textAlign: 'center' }}>
          <Button onClick={() => setShowTalent(false)}>{t('gameclass.close')}</Button>
        </div>
      </Modal>
    </>
  )
}

export default GameClass
