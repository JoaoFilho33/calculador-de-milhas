import React from 'react';

interface Props {
  desconto: number;
  onDescontoChange: (value: number) => void;
}

const DescontoInput: React.FC<Props> = ({ desconto, onDescontoChange }) => {
  return (
    <div className="input-container">
      <label htmlFor="desconto">Desconto (%):</label>
      <input
        type="number"
        id="desconto"
        value={desconto}
        onChange={(e) => onDescontoChange(parseFloat(e.target.value))}
      />
    </div>
  );
};

export default DescontoInput;
    