'use client'
import styled, { css } from 'styled-components'

export const Container = styled.span`
  ${({ theme }) => css`
    display: flex;
    margin-left: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.small};

    @media (max-width: ${theme.screen.big}) {
      /* font-size: ${theme.font.sizes.xxsmall}; */
      margin-left: ${theme.spacings.xxsmall};
    }
    @media (max-width: ${theme.spacings.large}) {
      font-size: ${theme.font.sizes.xxxxsmall};
    }
  `}
`
