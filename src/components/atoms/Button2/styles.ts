import styled, { css } from 'styled-components'

type PropsButton = {
  theme: any
  subType?: string
  disabled?: boolean
  width?: string
  height?: string
  fontSize?: string
  fontWeight?: string
}

const colorStyles = ({ subType, disabled, theme }: PropsButton) => {
  if (!disabled) {
    switch (subType) {
      case 'primary' : {
        const backgroundColor = theme.Colors.MainColor
        const color = theme.Colors.White
        const hoverEBGColor = '#2B1374'
        return css`
          background: ${backgroundColor};
          &:hover {
            background: ${hoverEBGColor}
          };
          color: ${color};
      ` }
      case 'ghost': {
        const backgroundColor = theme.Colors.HoverColor
        const color = theme.Colors.MainColor
        const hoverEBGColor = '#DAD3ED'
        return css`
          background: ${backgroundColor};
          &:hover {
            background: ${hoverEBGColor}
          };
          color: ${color};
          
      ` }
      case 'danger': {
        const backgroundColor = theme.Colors.RedColor
        const color = theme.Colors.White
        const hoverEBGColor = '#e53332'
        return css`
          background: ${backgroundColor};
          &:hover {
            background: ${hoverEBGColor}
          };
          color: ${color};
          
      ` }
    }
  } else if (disabled) {
    switch (subType) {
      case 'primary' : {
        const backgroundColor = theme.Colors.GrayE
        const color = theme.Colors.GrayC
        return css`
          background: ${backgroundColor};
          color: ${color};
      ` }
      case 'ghost': {
        const backgroundColor = theme.Colors.White
        const color = theme.Colors.GrayC
        return css`
          background: ${backgroundColor};
          color: ${color};
        `
      }
      case 'danger': {
        const backgroundColor = theme.Colors.White
        const color = theme.Colors.GrayC
        return css`
          background: ${backgroundColor};
          color: ${color};
        `
      }
    }
  }
}

const sizeStyles = ({ width, height }: PropsButton) => {
  return css`
    width: ${width !== '-1px' ? width : 'auto'};
    height: ${height !== '-1px' ? height : 'auto'};
  `
}

const fontStyles = ({ fontWeight, fontSize }: PropsButton) => {
  const numberTypeValueOfFontWeight = Number(fontWeight)
  const isNanOfFontWeight = isNaN(numberTypeValueOfFontWeight)

  if (isNanOfFontWeight) {
    return css`
      font-size: ${fontSize};
      font-weight: ${fontWeight};
    `
  } else if (!isNanOfFontWeight) {
    return css`
      font-size: ${numberTypeValueOfFontWeight};
      font-weight: ${fontWeight};
      `
  }
}

const styledButton = styled.button.attrs({
  type: 'button' // submit 안되게 처리
})<PropsButton>`
  /* 공통 스타일 */
  display: inline-flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  padding-left: 27px;
  padding-right: 27px;
  padding-top: 8px;
  padding-bottom: 8px;
  font-weight: ${props => props.fontWeight};
  font-size: ${props => props.fontSize?.replace('"', '')};

  /* 색상 */
  ${props =>
    colorStyles(props)
  }

  /* 사이즈 */
  ${props =>
    sizeStyles(props)
  }

  /* 폰트 */
  ${props =>
    fontStyles(props)
  }

  /* 애니메이션 */
  transition: ${props => props.theme.transition};

  :focus { outline: none; }

  /* 기타 */
  & + & {
    margin-left: 10px;
  }
  cursor: pointer;
`

export default styledButton
