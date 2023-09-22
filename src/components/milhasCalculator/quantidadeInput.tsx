import React from 'react';

interface Props {
  quantidade: number;
  onQuantidadeChange: (value: number) => void;
}

const QuantidadeInput: React.FC<Props> = ({ quantidade, onQuantidadeChange }) => {
  return (
    <div className="input-container">
      <label htmlFor="quantidade">Quantidade de Milhas:</label>
      <input
        type="number"
        id="quantidade"
        value={quantidade}
        onChange={(e) => onQuantidadeChange(parseFloat(e.target.value))}
      />
    </div>
  );
};

export default QuantidadeInput;
