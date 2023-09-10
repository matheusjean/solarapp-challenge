import * as S from './styles'

export default function SelectedAddress({ children, ...props }) {
  return <S.Container {...props}>{children}</S.Container>
}