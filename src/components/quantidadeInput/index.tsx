import React from 'react';
import './style.css'

interface Props {
  quantidade: number;
  onQuantidadeChange: (value: number) => void;
}

const QuantidadeInput: React.FC<Props> = ({ quantidade, onQuantidadeChange }) => {
  return (
    <div className="valor-display">
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
