import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Router from 'next/router'
import styled, { css } from 'styled-components'
import { useTranslation } from 'react-i18next'
import ReactEChartsCore from 'echarts-for-react/lib/core'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/radar'
import 'echarts/lib/component/title'
import 'echarts/lib/component/grid'
import { BsBarChart, BsCloud, BsFileText } from 'react-icons/bs'

import Theme from '../../styles/theme'
import WowClassInfo from '../../lib/GameClassInfo'
import API from '../../lib/info.json'

import Button from '../atoms/Button'
import Loader from '../atoms/Loader'

import reducerTest from '../../reducers/reducerTest'

const StyledLoadingWrapper = styled.div`
  width: 100vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`

const StyledResult = styled.div`
  ${({ theme }) => {
    return css`
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
      padding-bottom: 25px;
      border-bottom: 1px solid ${theme.colors.info};
    `
  }}
`
const StyledResultTitle = styled.div`
  ${({ theme }) => {
    return css`
      width: 100%;
      flex: 0 0 100%;
      color: ${theme.colors.info};
      font-weight: 600;
      margin-bottom: 10px;
      font-size: 16px;

      & > svg {
        margin-right: 4px;
        margin-bottom: -2px;
      }
    `
  }}
`
const StyledResultCount = styled.div`
  ${({ theme }) => {
    return css`
      & > span.total {
        color: ${theme.colors.white};
        font-size: 1.2em;
      }
      & > span.sum {
        font-weight: 600;
        font-size: 2.4em;
      }
    `
  }}
`
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
`
const StyledResultListItems = styled.ul`
  ${({ theme }) => {
    return css`
      flex: 1 1 100%;
      display: flex;
      text-align: center;
      user-select: none;
      cursor: pointer;

      & > li {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      & > .image {
        flex: 0 0 64px;
      }
      & > .name {
        flex: 0 0 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      & > .progress {
        flex: 1 1 auto;
        padding: 4px;
        padding-right: 14px;
        display: flex;
        justify-content: flex-start;
        position: relative;
        & > div.progressBar {
          height: 100%;
          border-radius: 4px;
          display: flex;
          justify-content: center;
          align-items: center;
          & > div.progressValue {
            position: absolute;
            left: 10px;
            color: ${theme.colors.white};
            mix-blend-mode: difference;
          }
        }
      }
      & > .value {
        flex: 0 0 40px;
        text-align: right;
      }
    `
  }}
`

const StyledYouLi = styled.li`
  padding: 4px 0;
  & > span {
    font-weight: 600;
  }
`

const wowClassIconWidth = 40
const StyledWowClassIcon = styled.img`
  width: ${wowClassIconWidth}px;
  height: ${wowClassIconWidth}px;
  border-radius: 40%;
  border: 2px solid ${({ theme }) => theme.colors.warning};
`

const TOKEN = '!?!'

type testResult = {
  sClass: string
  sTalent: string
  nCount?: number
  nSum?: number
}
type mlProp = {
  sC: string //  class
  sT: string //  talent
  sI?: string //  input
  sR?: string //  result
}
type resultNNProp = {
  label: string
  confidence: number
}

const FOR_TRAINING = false

export const Result: React.FC = () => {
  const { t, i18n } = useTranslation()
  const { testInfo } = reducerTest()
  const [result, setResult] = useState<testResult[]>([])
  const [resultRatio, setResultRatio] = useState<testResult[]>([])
  const [resultTotal, setResultTotal] = useState<testResult[]>([])
  const [resultML, setResultML] = useState<mlProp[]>([])
  const [resultNN, setResultNN] = useState<resultNNProp[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const [agree, setAgree] = useState<number>(1)
  const [consc, setConsc] = useState<number>(1)
  const [extra, setExtra] = useState<number>(1)
  const [openn, setOpenn] = useState<number>(1)
  const [neuro, setNeuro] = useState<number>(1)

  const [total, setTotal] = useState<number>(0)
  const [sum, setSum] = useState<number>(0)
  const [max, setMax] = useState<number>(1)
  const [maxRatio, setMaxRatio] = useState<number>(100)
  const [maxTotal, setMaxTotal] = useState<number>(1)
  const [showStat, setShowStat] = useState<boolean>(false)
  const [more, setMore] = useState<boolean>(false)
  const [moreRatio, setMoreRatio] = useState<boolean>(false)
  const [moreTotal, setMoreTotal] = useState<boolean>(false)

  const [nn, setNN] = useState<any>(undefined)

  let ml5: any = null

  const numberWithCommas = (x: number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  const parseRange = (val: number) => {
    if (val >= 1 && val < 2.5) return 1
    if (val >= 2.5 && val <= 3.5) return 3
    if (val > 3.5 && val <= 5) return 5
    return 0
  }

  useEffect(() => {
    i18n.changeLanguage(window.localStorage.getItem('lang') || 'en')
  }, [])

  useEffect(() => {
    let unmount = false

    const onLoadApi = async () => {
      const _agree = parseRange(testInfo.get.agreeablenessScore / testInfo.get.agreeablenessCount)
      const _consc = parseRange(testInfo.get.conscientiousnessScore / testInfo.get.conscientiousnessCount)
      const _extra = parseRange(testInfo.get.extraversionScore / testInfo.get.extraversionCount)
      const _openn = parseRange(testInfo.get.opennessToExperienceScore / testInfo.get.opennessToExperienceCount)
      const _neuro = parseRange(testInfo.get.neuroticismScore / testInfo.get.neuroticismCount)

      await axios
        .post(API.path, null, {
          params: {
            bTraining: FOR_TRAINING ? 'true' : undefined,
            sFirstClass: testInfo.get.firstClass,
            sFirstTalent: testInfo.get.firstTalent,
            sSecondClass: testInfo.get.secondClass,
            sSecondTalent: testInfo.get.secondTalent,
            sThirdClass: testInfo.get.thirdClass,
            sThirdTalent: testInfo.get.thirdTalent,
            sInput: testInfo.get.inputValues.join(''),
            nAgreeableness: _agree,
            nConscientiousness: _consc,
            nExtraversion: _extra,
            nOpennessToExperience: _openn,
            nNeuroticism: _neuro
          }
        })
        .then((response) => {
          if (unmount) return
          if (response.status === 200) {
            setTotal(response.data.count[0].nCnt)
            setResult(response.data.list)
            setResultRatio(response.data.ratio)
            setResultTotal(response.data.total)
            if (FOR_TRAINING) setResultML(response.data.ml)
          } else {
            setResult(undefined)
          }
        })
        .catch((error) => {
          if (unmount) return
          console.error(error)
        })
        .finally(() => {
          setLoading(false)
          setAgree(_agree)
          setConsc(_consc)
          setExtra(_extra)
          setOpenn(_openn)
          setNeuro(_neuro)
        })
    }

    setTimeout(() => onLoadApi(), 2 * 1000)

    return () => {
      unmount = true
    }
  }, [])

  useEffect(() => {
    if (window && ml5 === null && resultML.length > 0) {
      ml5 = require('ml5')

      const options = {
        task: 'classification',
        debug: FOR_TRAINING
      }

      const _nn = ml5.neuralNetwork(options)

      const trainingOptions = {
        epochs: 100,
        batchSize: 50
      }

      const finishedTraining = () => {
        classify()
      }

      const classify = () => {
        const input = {
          v00: parseRange(testInfo.get.agreeablenessScore / testInfo.get.agreeablenessCount) * 20,
          v01: parseRange(testInfo.get.conscientiousnessScore / testInfo.get.conscientiousnessCount) * 20,
          v02: parseRange(testInfo.get.extraversionScore / testInfo.get.extraversionCount) * 20,
          v03: parseRange(testInfo.get.opennessToExperienceScore / testInfo.get.opennessToExperienceCount) * 20,
          v04: parseRange(testInfo.get.neuroticismScore / testInfo.get.neuroticismCount) * 20
        }
        _nn.classify(input, handleResults)
      }

      const handleResults = (error, result) => {
        if (error) {
          console.error(error)
          return
        }
        setResultNN(result)
      }

      resultML.forEach((el: mlProp) => {
        const _val = el.sR.split('')
        const inputs = {
          v00: parseInt(_val[0], 10) * 20,
          v01: parseInt(_val[1], 10) * 20,
          v02: parseInt(_val[2], 10) * 20,
          v03: parseInt(_val[3], 10) * 20,
          v04: parseInt(_val[4], 10) * 20
        }
        const output = {
          sClass: `${el.sC}${TOKEN}${el.sT}`
        }

        _nn.addData(inputs, output)
      })

      _nn.normalizeData()
      _nn.train(trainingOptions, finishedTraining)
      setNN(_nn)
    } else if (window && ml5 === null) {
      ml5 = require('ml5')

      const options = {
        task: 'classification',
        debug: false
      }

      let _nn = ml5.neuralNetwork(options)

      const modelDetails = {
        model: '/model/model.json',
        metadata: '/model/model_meta.json',
        weights: '/model/model.weights.bin'
      }

      const modelReady = () => {
        classfy()
      }

      _nn.load(modelDetails, modelReady)

      const classfy = () => {
        const input = {
          v00: parseRange(testInfo.get.agreeablenessScore / testInfo.get.agreeablenessCount) * 20,
          v01: parseRange(testInfo.get.conscientiousnessScore / testInfo.get.conscientiousnessCount) * 20,
          v02: parseRange(testInfo.get.extraversionScore / testInfo.get.extraversionCount) * 20,
          v03: parseRange(testInfo.get.opennessToExperienceScore / testInfo.get.opennessToExperienceCount) * 20,
          v04: parseRange(testInfo.get.neuroticismScore / testInfo.get.neuroticismCount) * 20
        }
        _nn.classify(input, handleResults)
      }

      const handleResults = (error, result) => {
        if (error) {
          console.error(error)
          return
        }
        setResultNN(result)
      }
    }
  }, [resultML])

  useEffect(() => {
    let _sum = 0
    result.forEach((el) => (_sum += el.nCount))

    if (result.length > 0) setMax(result[0].nCount)
    else setMax(1)

    setSum(_sum)
  }, [result])

  useEffect(() => {
    if (resultRatio.length > 0) setMaxRatio(resultRatio[0].nSum)
    else setMaxRatio(100)
  }, [resultRatio])

  useEffect(() => {
    if (resultTotal.length > 0) setMaxTotal(resultTotal[0].nSum)
    else setMaxTotal(1)
  }, [resultTotal])

  const getOption = () => {
    return {
      title: {
        text: t('result.title'),
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
          { name: t('result.agreeableness'), max: 5 },
          { name: t('result.conscientiousness'), max: 5 },
          { name: t('result.extraversion'), max: 5 },
          { name: t('result.opennessToExperience'), max: 5 },
          { name: t('result.neuroticism'), max: 5 }
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
    }
  }

  return (
    <>
      <StyledLoadingWrapper style={{ display: loading ? 'inherit' : 'none' }}>
        <Loader style={{ marginBottom: '20px' }} />
        {t('result.loading')}
      </StyledLoadingWrapper>

      <div style={{ display: loading ? 'none' : 'flex', flexDirection: 'column', alignItems: 'center', padding: '6px' }}>
        <StyledResult>
          <StyledResultTitle>
            <BsBarChart />
            {t('result.you')}
          </StyledResultTitle>
          <ReactEChartsCore
            echarts={echarts}
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
          <ul>
            <StyledYouLi>
              <span style={{ color: '#ffd50e' }}>{t('result.agreeableness')}: </span>
              {t('result.agreeablenessDesc')}
            </StyledYouLi>
            <StyledYouLi>
              <span style={{ color: '#ffa53a' }}>{t('result.conscientiousness')}: </span>
              {t('result.conscientiousnessDesc')}
            </StyledYouLi>
            <StyledYouLi>
              <span style={{ color: '#89dd26' }}>{t('result.extraversion')}: </span>
              {t('result.extraversionDesc')}
            </StyledYouLi>
            <StyledYouLi>
              <span style={{ color: '#e980ff' }}>{t('result.opennessToExperience')}: </span>
              {t('result.opennessToExperienceDesc')}
            </StyledYouLi>
            <StyledYouLi>
              <span style={{ color: '#36b1ff' }}>{t('result.neuroticism')}: </span>
              {t('result.neuroticismDesc')}
            </StyledYouLi>
          </ul>
        </StyledResult>
        <StyledResult>
          <StyledResultTitle>
            <BsCloud />
            {t('result.machinelearning')}
          </StyledResultTitle>
          <StyledResultList>
            {resultNN.length === 0 && (
              <>
                <li>
                  <Loader style={{ marginBottom: '20px' }} />
                </li>
                <li>{t('result.training')}</li>
              </>
            )}
            {resultNN.map((el: resultNNProp, elIdx: number) => {
              if (elIdx > 4) return undefined
              const _el = el.label.split(TOKEN)
              const _class = WowClassInfo.find((v) => v.name == _el[0])
              const _talent = _class.talents.find((v) => v.name == _el[1])

              return (
                <li key={elIdx}>
                  <StyledResultListItems>
                    <li className={'image'}>
                      <StyledWowClassIcon className="img" src={`/class/${_talent.image}`} alt={`${t(_class.name)} - ${_talent.name}`} />
                    </li>
                    <li className={'name'}>{t(`gameclass.${_talent.name}`)}</li>
                    <li className={'progress'}>
                      <div className={'progressBar'} style={{ width: Math.round((el.confidence / resultNN[0].confidence) * 100) + '%', backgroundColor: _class.color }}>
                        <div className={'progressValue'}>{Math.round(el.confidence * 10000) / 100}</div>
                      </div>
                    </li>
                  </StyledResultListItems>
                </li>
              )
            })}
          </StyledResultList>
        </StyledResult>

        {/* {!showStat && <Button onClick={() => setShowStat(true)}>{t('result.stat')}</Button>} */}

        {showStat && (
          <>
            <StyledResult>
              <StyledResultTitle>
                <BsFileText />
                {t('result.testcount')}
              </StyledResultTitle>
              <StyledResultCount>
                <span className={'sum'} style={{ color: sum < 10 ? '#F99ED4' : sum < 100 ? '#ffe96b' : '#ABE3A2' }}>
                  {numberWithCommas(sum)}
                </span>{' '}
                <span className={'total'}>/ {numberWithCommas(total)}</span>
              </StyledResultCount>
            </StyledResult>
            <StyledResult>
              <StyledResultTitle>
                <BsFileText />
                {t('result.likeyouratio')}
              </StyledResultTitle>
              <StyledResultList>
                {resultRatio.map((el: testResult, elIdx: number) => {
                  if (!moreRatio && elIdx > 4) return undefined

                  const _class = WowClassInfo.find((v) => v.name == el.sClass)
                  const _talent = _class.talents.find((v) => v.name == el.sTalent)

                  return (
                    <li key={elIdx}>
                      <StyledResultListItems>
                        <li className={'image'}>
                          <StyledWowClassIcon className="img" src={`/class/${_talent.image}`} alt={`${t(_class.name)} - ${_talent.name}`} />
                        </li>
                        <li className={'name'}>
                          {t(`gameclass.${_class.name}`)}
                          <br />
                          {t(`gameclass.${_talent.name}`)}
                        </li>
                        <li className={'progress'}>
                          <div className={'progressBar'} style={{ width: Math.round((el.nSum / maxRatio) * 10000) / 100 + '%', backgroundColor: _class.color }}>
                            <div className={'progressValue'}>{Math.round(el.nSum * 100) / 100}%</div>
                          </div>
                        </li>
                      </StyledResultListItems>
                    </li>
                  )
                })}
                {resultRatio.length > 5 && !moreRatio && (
                  <li>
                    <Button onClick={() => setMoreRatio(true)}>{t('result.more')}</Button>
                  </li>
                )}
              </StyledResultList>
            </StyledResult>
            <StyledResult>
              <StyledResultTitle>
                <BsFileText />
                {t('result.likeyoucount')}
              </StyledResultTitle>
              <StyledResultList>
                {result.map((el: testResult, elIdx: number) => {
                  if (!more && elIdx > 4) return undefined

                  const _class = WowClassInfo.find((v) => v.name == el.sClass)
                  const _talent = _class.talents.find((v) => v.name == el.sTalent)

                  return (
                    <li key={elIdx}>
                      <StyledResultListItems>
                        <li className={'image'}>
                          <StyledWowClassIcon className="img" src={`/class/${_talent.image}`} alt={`${t(_class.name)} - ${_talent.name}`} />
                        </li>
                        <li className={'name'}>
                          {t(`gameclass.${_class.name}`)}
                          <br />
                          {t(`gameclass.${_talent.name}`)}
                        </li>
                        <li className={'progress'}>
                          <div className={'progressBar'} style={{ width: Math.round((el.nCount / max) * 10000) / 100 + '%', backgroundColor: _class.color }}>
                            <div className={'progressValue'}>{el.nCount}</div>
                          </div>
                        </li>
                      </StyledResultListItems>
                    </li>
                  )
                })}
                {result.length > 5 && !more && (
                  <li>
                    <Button onClick={() => setMore(true)}>{t('result.more')}</Button>
                  </li>
                )}
              </StyledResultList>
            </StyledResult>
            <StyledResult>
              <StyledResultTitle>
                <BsFileText />
                {t('result.totalcount')}
              </StyledResultTitle>
              <StyledResultList>
                {resultTotal.map((el: testResult, elIdx: number) => {
                  if (!moreTotal && elIdx > 4) return undefined

                  const _class = WowClassInfo.find((v) => v.name == el.sClass)
                  const _talent = _class.talents.find((v) => v.name == el.sTalent)

                  return (
                    <li key={elIdx}>
                      <StyledResultListItems>
                        <li className={'image'}>
                          <StyledWowClassIcon className="img" src={`/class/${_talent.image}`} alt={`${t(_class.name)} - ${_talent.name}`} />
                        </li>
                        <li className={'name'}>
                          {t(`gameclass.${_class.name}`)}
                          <br />
                          {t(`gameclass.${_talent.name}`)}
                        </li>
                        <li className={'progress'}>
                          <div className={'progressBar'} style={{ width: Math.round((el.nSum / maxTotal) * 10000) / 100 + '%', backgroundColor: _class.color }}>
                            <div className={'progressValue'}>{el.nSum}</div>
                          </div>
                        </li>
                      </StyledResultListItems>
                    </li>
                  )
                })}
                {resultTotal.length > 5 && !moreTotal && (
                  <li>
                    <Button onClick={() => setMoreTotal(true)}>{t('result.more')}</Button>
                  </li>
                )}
              </StyledResultList>
            </StyledResult>
          </>
        )}
        <div style={{ margin: '10px 0' }}>
          {t('result.warning')}
          <br />
          <br />
          {t('result.thankyou')}
        </div>
        <Button primary onClick={() => Router.push('/')}>
          {t('result.retry')}
        </Button>
        {FOR_TRAINING ? (
          <Button primary onClick={() => nn.save()}>
            SAVE
          </Button>
        ) : (
          <></>
        )}
      </div>
    </>
  )
}

export default Result
