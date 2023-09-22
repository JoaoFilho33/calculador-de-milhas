import React from 'react';
import './style.css'

interface Props {
  valorFinal: number;
  precoMilheiroEfetivo: number;
}

const Resultados: React.FC<Props> = ({ valorFinal, precoMilheiroEfetivo }) => {
  return (
    <div className="resultado">
      <p>Valor Final a Pagar (R$): {valorFinal.toFixed(2)}</p>
      <p>Cada milheiro sairá por R$ {precoMilheiroEfetivo.toFixed(2)}</p>
    </div>
  );
};

export default Resultados;
