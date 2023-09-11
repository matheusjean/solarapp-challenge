import { useState } from 'react';
import * as S from './styles'

export default function Card({ children,onClick, isClicked, ...props }) {
  return (
    <S.Container {...props} onClick={onClick} isClicked={isClicked}>
      {children}
    </S.Container>
  )
}