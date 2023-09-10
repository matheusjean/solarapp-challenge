import * as S from './styles'

export default function Description({ children, ...props }) {
  return <S.Container {...props}>{children}</S.Container>
}