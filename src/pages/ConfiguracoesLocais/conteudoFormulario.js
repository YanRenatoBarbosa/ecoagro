import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import { ConfirmacaoDados } from './ConfirmacaoDados';

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
    campos: [
      <Select key='select1' opcaoPadrao='Cultura' opcoes={['Alface', 'Batata', 'Tomate', 'Cebola']} helperText='Selecione' />,
      <Select key='select2' opcaoPadrao='Tipo de solo' opcoes={['Arenoso', 'Argiloso', 'Calcário', 'Humoso']} helperText='Selecione' />,
      <Select key='select3' opcaoPadrao='Tipo de irrigação' opcoes={['Aspersão', 'Sulco', 'Gotejamento']} helperText='Selecione' />
    ],
    textoBtn: 'Próximo'
  }
}

export const etapaConfirmacao = (dados, setEtapaAtual) => {

  return {
    textoh2: 'Confirmação dos dados',
    campos: [
      <ConfirmacaoDados key='confirmacaoDados' dados={dados} setEtapaAtual={setEtapaAtual}/>
    ],
    textoBtn: 'Confirmar'
  }
}