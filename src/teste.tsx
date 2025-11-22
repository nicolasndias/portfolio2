import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'blue' : 'gray')};
  font-size: ${(props) => props.fontSize || '160px'};
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: white;
`

function Teste() {
  return (
    <>
      <Botao principal>Botão principal</Botao>

      <Botao fontSize="28px" principal={false}>
        Botão comum
      </Botao>

      <BotaoPerigo as="a" principal>
        Botão de perigo
      </BotaoPerigo>
    </>
  )
}

export default Teste
