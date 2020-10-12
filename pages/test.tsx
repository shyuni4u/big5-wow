import React from 'react'
import Wrapper from '../components/organisms/Wrapper'
import ClassForm from '../components/organisms/Class'
import TestForm from '../components/organisms/Test'

export const Test: React.FC = () => {
  return (
    <Wrapper>
      <ClassForm />
      <TestForm />
    </Wrapper>
  )
}

export default Test
