import * as S from './styles'

export default function Card({ children, ...props }) {
  return <S.Container {...props}>{children}</S.Container>
}