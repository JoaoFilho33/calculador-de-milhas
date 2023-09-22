import React, { useState } from 'react';
import ValorPadraoInput from './valorPadraoInput';
import DescontoInput from './descontoInput';
import BonusInput from './bonusInput';
import QuantidadeInput from './quantidadeInput'; // Importe o novo componente
import Resultados from './resultados';

function MilhasCalculator() {
  const [valorPadrao, setValorPadrao] = useState<number>(70);
  const [desconto, setDesconto] = useState<number>(40);
  const [bonus, setBonus] = useState<number>(200);
  const [quantidade, setQuantidade] = useState<number>(0); // Novo estado para a quantidade
  const [valorFinal, setValorFinal] = useState<number>(0);
  const [precoMilheiroEfetivo, setPrecoMilheiroEfetivo] = useState<number>(0);

  const calcularMilhas = () => {
    const valorMilheiroBase = (valorPadrao * (100-desconto)) / 100
    const valorFinalAPagar = valorMilheiroBase * (quantidade / 1000)

    //const precoMilheiro = (valorFinalAPagar / (quantidade + quantidade * (bonus/100))) * 1000

    const qtdTotalMilheiro = quantidade + quantidade * (bonus/100)
    const totalMilheiro = (valorFinalAPagar / qtdTotalMilheiro) * 1000

    setValorFinal(valorFinalAPagar);
    setPrecoMilheiroEfetivo(totalMilheiro);
  };

  return (
    <div className="milhas-calculator">
      <h2>Calculadora de Milhas</h2>
      <ValorPadraoInput valorPadrao={valorPadrao} onValorPadraoChange={setValorPadrao} />
      <DescontoInput desconto={desconto} onDescontoChange={setDesconto} />
      <BonusInput bonus={bonus} onBonusChange={setBonus} />
      <QuantidadeInput quantidade={quantidade} onQuantidadeChange={setQuantidade} />
      <button onClick={calcularMilhas}>Calcular</button>
      <Resultados valorFinal={valorFinal} precoMilheiroEfetivo={precoMilheiroEfetivo} />
    </div>
  );
}

export default MilhasCalculator;
