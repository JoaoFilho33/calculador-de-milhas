import React from 'react';

interface Props {
  valorPadrao: number;
  onValorPadraoChange: (value: number) => void;
}

const ValorPadraoInput: React.FC<Props> = ({ valorPadrao, onValorPadraoChange }) => {
  return (
    <div className="input-container">
      <label htmlFor="valorPadrao">Valor padrão do milheiro (R$):</label>
      <input
        type="number"
        id="valorPadrao"
        value={valorPadrao}
        onChange={(e) => onValorPadraoChange(parseFloat(e.target.value))}
      />
    </div>
  );
};

export default ValorPadraoInput;
