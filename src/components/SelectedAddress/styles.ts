'use client'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: none;
    margin: ${theme.spacings.xsmall};
    width: auto;
    margin-top: 30px;
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
