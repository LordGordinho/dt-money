import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles'

interface HeaderProps{
  onHandleNewTransaction: () => void
}

export const Header = ({ onHandleNewTransaction }: HeaderProps) => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="" />
        <button type="button" onClick={onHandleNewTransaction}>Nova Transação</button>
      </Content>
    </Container>
  )
}