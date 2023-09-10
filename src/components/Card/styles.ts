'use client'
import styled, { css } from 'styled-components'

type CardProps = {
  background?: string
  width?: string
}

export const Container = styled.div<CardProps>`
  ${({ theme, background }) => css`
    background-color: ${background ? 'none' : '#e8e8e8'};
    margin: ${theme.spacings.xsmall};
    width: auto;
    height: 80px;

    @media (max-width: 1200px) {
      margin: ${theme.spacings.xsmall} -15px;
      width: 10rem;
      height: 70px;
      margin-left: 2rem;
      margin-top: 5px;
    }

    @media (max-width: 768px) {
      justify-content: space-between;
      width: 13rem;
      height: 7rem;
      margin: ${theme.spacings.xsmall};
    }
  `}
`
