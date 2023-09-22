import React from 'react';

interface Props {
  bonus: number;
  onBonusChange: (value: number) => void;
}

const BonusInput: React.FC<Props> = ({ bonus, onBonusChange }) => {
  return (
    <div className="input-container">
      <label htmlFor="bonus">Bônus (%):</label>
      <input
        type="number"
        id="bonus"
        value={bonus}
        onChange={(e) => onBonusChange(parseFloat(e.target.value))}
      />
    </div>
  );
};

export default BonusInput;
