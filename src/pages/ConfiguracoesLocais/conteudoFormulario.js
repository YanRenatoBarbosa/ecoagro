import { Input } from '../../components/Input';

export const etapaQuantidade = (qtdTensiosRasos, setQtdTensiosRasos, statusInputRasos, qtdTensiosProfundos, setQtdTensiosProfundos, statusInputProfs ) => {

  return {
    textoh2: 'Quantidade de Tensiômetros por profundidade',
    campos: [
      <Input key='1' value={qtdTensiosRasos} setValue={setQtdTensiosRasos} typeInput="number" placeholder='Tensiômetros Rasos' helperText='Digite a quantidade' status={statusInputRasos} />,
      <Input key='2' value={qtdTensiosProfundos} setValue={setQtdTensiosProfundos} typeInput="number" placeholder='Tensiômetros Profundos' helperText='Digite a quantidade' status={statusInputProfs} />
    ],
    textoBtn: 'Próximo'
  }
}

export const etapaEspecificacoes = () => {
  return {
    textoh2: 'Especificações do solo',
    campos: <p>ola mundo</p>,
    textoBtn: 'Próximo'
  }
}