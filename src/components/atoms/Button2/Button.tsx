import React, { ReactNode } from 'react'

type PropsButton = {
  children: ReactNode
  style?: React.CSSProperties
  onClick(e: any): void
}

const Button: React.FC<PropsButton> = (props: PropsButton) => {
  return (
    <button
      style={props.style}
      onClick={props.onClick}
      onDoubleClick= {undefined}
    >
      {props.children}
    </button>
  )
}

export default Button
