import * as S from './styles'

export default function Title({ children, ...props }) {
  return <S.Container {...props}>{children}</S.Container>
}