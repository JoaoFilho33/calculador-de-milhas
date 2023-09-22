// ResultadosBox.tsx
import React from 'react';
import './ResultadosBox.css'; // Importe o estilo CSS

interface Props {
  valorFinal: number;
  precoMilheiroEfetivo: number;
}

const ResultadosBox: React.FC<Props> = ({ valorFinal, precoMilheiroEfetivo }) => {
  return (
    <div className="resultados-box">
      <div className="valor-display">{valorFinal.toFixed(2)}</div>
      <div className="preco-milheiro">{precoMilheiroEfetivo.toFixed(2)}</div>
    </div>
  );
};

export default ResultadosBox;
