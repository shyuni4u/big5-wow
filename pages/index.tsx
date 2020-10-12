import React from 'react'
import Link from 'next/link'
import Wrapper from '../components/organisms/Wrapper'

export const Index: React.FC = () => {
  return (
    <Wrapper>
      <Link href="/test">
        <a>게시판</a>
      </Link>
    </Wrapper>
  )
}

export default Index