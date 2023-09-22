import React, { useState } from 'react';
import './style.css'
import ValorPadraoInput from '../valorPadraoInput';
import DescontoInput from '../descontoInput';
import BonusInput from '../bonusInput';
import Resultados from '../resultadosCompra';
import IncrementButtons from '../incrementMilesButton'
import MilhasCalculatorButton from '../milhasCalculatorButton';

function MilhasCalculator() {
  const [valorPadrao, setValorPadrao] = useState<number>(70);
  const [desconto, setDesconto] = useState<number>(40);
  const [bonus, setBonus] = useState<number>(200);
  const [quantidade, setQuantidade] = useState<number>(0);
  const [valorFinal, setValorFinal] = useState<number>(0);
  const [precoMilheiroEfetivo, setPrecoMilheiroEfetivo] = useState<number>(0);

  const calcularMilhas = () => {
    const valorMilheiroBase = (valorPadrao * (100 - desconto)) / 100
    const valorFinalAPagar = valorMilheiroBase * (quantidade / 1000)

    const qtdTotalMilheiro = quantidade + quantidade * (bonus / 100)
    const totalMilheiro = (valorFinalAPagar / qtdTotalMilheiro) * 1000

    setValorFinal(valorFinalAPagar);
    setPrecoMilheiroEfetivo(totalMilheiro);
  };

  const decrement1k = () => {
    setQuantidade((prevQuantidade) => Math.max(prevQuantidade - 1000, 1000));
  };

  const decrement10k = () => {
    setQuantidade((prevQuantidade) => Math.max(prevQuantidade - 10000, 1000));
  };

  const increment1k = () => {
    setQuantidade((prevQuantidade) => prevQuantidade + 1000);
  };


  const increment10k = () => {
    setQuantidade((prevQuantidade) => prevQuantidade + 10000);
  };


  return (
    <div className="milhas-calculator">
      <h2>Calculadora de Milhas</h2>
      <IncrementButtons
        quantidade={quantidade}
        onDecrement1k={decrement1k}
        onDecrement10k={decrement10k}
        onIncrement1k={increment1k}
        onIncrement10k={increment10k}
        onQuantidadeChange={calcularMilhas}
      />
      <ValorPadraoInput valorPadrao={valorPadrao} onValorPadraoChange={setValorPadrao} />
      <DescontoInput desconto={desconto} onDescontoChange={setDesconto} />
      <BonusInput bonus={bonus} onBonusChange={setBonus} />
      <MilhasCalculatorButton onCalcularMilhas={calcularMilhas} />
      <Resultados valorFinal={valorFinal} precoMilheiroEfetivo={precoMilheiroEfetivo} />
    </div>
  );
}

export default MilhasCalculator;
