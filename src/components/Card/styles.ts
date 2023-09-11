'use client'
import styled, { css } from 'styled-components'
interface StyledDivProps {
  isClicked: boolean
}

export const Container = styled.div<StyledDivProps>`
  ${({ theme, isClicked }) => css`
    margin: ${theme.spacings.xsmall};
    /* background-color: ${theme.colors.lightGray}; */
    width: auto;
    height: 72px;
    background-color: ${isClicked ? '#87ceeb' : theme.colors.lightGray};

    &:hover {
      cursor: pointer;
      background-color: #87ceeb;
    }

    @media (max-width: 1700px) {
      margin: ${theme.spacings.xsmall} -15px;
      width: 80%;
      height: 5.2rem;
      margin-left: 10px;
      margin-top: 5px;
    }

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
