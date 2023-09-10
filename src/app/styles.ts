'use client'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: ${theme.spacings.small};
    height: 91vh;
    margin-top: -20px;

    div {
      border-radius: ${theme.border.radius.medium};
    }

    @media (max-width: ${theme.screen.large}) {
      width: 100vh;
      flex-direction: column;
    }

    @media (max-width: ${theme.screen.medium}) {
      min-width: ${theme.grid.mainWidth};
      width: 100vh;
      height: 180vh;
    }
  `}
`

export const SideContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    height: 88%;
    margin-left: ${theme.spacings.small};
    width: 15%;

    @media (max-width: ${theme.screen.large}) {
      width: ${theme.grid.mainWidth};
      height: 30%;
      margin-left: 0;
      margin-top: ${theme.spacings.small};
      flex-direction: row;
    }

    @media (max-width: ${theme.screen.medium}) {
      min-width: ${theme.grid.mainWidth};
      height: 50%;
    }
  `}
`
export const MapContainer = styled.div`
  ${({ theme }) => css`
    min-width: 600px;
    width: ${theme.grid.mainWidth};
    height: ${theme.grid.mainWidth};
  `}
`

export const Wrapper = styled.section`
  ${({ theme }) => css`
    @media (max-width: ${theme.screen.large}) {
      display: flex;
      flex-wrap: wrap;
    }
  `}
`
