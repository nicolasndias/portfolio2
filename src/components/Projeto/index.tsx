import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao } from './styles'

const Projeto = () => {
  return (
    <Card>
      <Titulo>To Do List</Titulo>
      <Paragrafo tipo="secundario">To do List made with VueJS</Paragrafo>
      <LinkBotao href="">Visualizar</LinkBotao>
    </Card>
  )
}

export default Projeto
