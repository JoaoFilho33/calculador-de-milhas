import './style.css'

interface Props {
  onCalcularMilhas?: () => void;
}

const MilhasCalculatorButton: React.FC<Props> = ({ onCalcularMilhas }) => {
  return (
    <div className='milhas-calculator-button'>
      <button onClick={onCalcularMilhas}>Calcular</button>
    </div>
  );
};

export default MilhasCalculatorButton;


