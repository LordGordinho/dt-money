import { Container } from './styles'

export const TransactionTable = () => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de site</td>
            <td className='deposit'>R$ 12.000,00</td>
            <td>Venda</td>
            <td>13/03/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className='withdraw'>- R$ 700,00</td>
            <td>Pessoal</td>
            <td>14/03/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}