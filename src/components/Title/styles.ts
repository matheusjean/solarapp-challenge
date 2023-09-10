'use client'
import styled, { css } from 'styled-components'

type TitleProps = {
  padding?: string
}

export const Container = styled.strong<TitleProps>`
  ${({ theme, padding }) => css`
    display: flex;
    margin-left: ${theme.spacings.xxsmall};
    font-size: 1.1;
    padding-top: ${padding ? padding : '5px'};

    @media (max-width: 1400px) {
      padding-top: 5px;
      font-size: ${theme.font.sizes.xxsmall};
    }

    @media (max-width: ${theme.screen.large}) {
      padding-top: 5px;
      /* font-size: ${theme.font.sizes.xsmall}; */
    }
  `}
`
