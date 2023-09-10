'use client'
import styled, { css } from 'styled-components'

export const Container = styled.span`
  ${({ theme }) => css`
    display: flex;
    margin-left: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.small};

    @media (max-width: ${theme.screen.big}) {
      margin-left: ${theme.screen.xxsmall};
    }
    @media (max-width: ${theme.screen.large}) {
      font-size: 1rem;
    }
  `}
`
