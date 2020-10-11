import React from 'react'
import Checkbox from '../../components/atoms/Checkbox'

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
]

// type TestItem = typeof testList

export const Test: React.FC = () => {
  const MAX_SCORE = 5

  return (
    <>
      <p>
        다음 표는 대니얼 네틀이 구분하는 다섯가지 성격모델을 확인하는 방법입니다.<br />
        전혀 아니다, 별로 아니다, 중간이다, 약간 그렇다, 매우 그렇다의 다섯단계로 답하세요.
      </p>
      <ol>
        {testList.map((item, index) => (
          <>
            <li key={index}>
              {item.question}
            </li>
            <li style={{ display: 'flex' }}>
              <Checkbox radio={true} value={item.reverse ? MAX_SCORE - 1 + 1 : 1 } style={{ flex: '1 1 100px' }} label={'전혀 아니다'} />
              <Checkbox radio={true} value={item.reverse ? MAX_SCORE - 2 + 1 : 2 } style={{ flex: '1 1 100px' }} label={'아니다'} />
              <Checkbox radio={true} value={item.reverse ? MAX_SCORE - 3 + 1 : 3 } style={{ flex: '1 1 100px' }} label={'보통이다'} />
              <Checkbox radio={true} value={item.reverse ? MAX_SCORE - 4 + 1 : 4 } style={{ flex: '1 1 100px' }} label={'그렇다'} />
              <Checkbox radio={true} value={item.reverse ? MAX_SCORE - 5 + 1 : 5 } style={{ flex: '1 1 100px' }} label={'매우 그렇다'} />
            </li>
          </>
        ))}
      </ol>
    </>
  )
}

export default Test
