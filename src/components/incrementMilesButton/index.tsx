import React from "react";
import QuantidadeInput from "../quantidadeInput";
import './style.css'

interface Props {
    quantidade: number
    onIncrement1k: () => void
    onDecrement1k: () => void
    onIncrement10k: () => void
    onDecrement10k: () => void
    onQuantidadeChange: (value:number) => void
}

const IncrementButtons: React.FC<Props> = ({
    quantidade,
    onIncrement1k,
    onDecrement1k,
    onIncrement10k,
    onDecrement10k,
    onQuantidadeChange,
}) => {
    return (
        <div className="increment-Buttons">
            <button onClick={onDecrement1k}>-1k</button>
            <button onClick={onDecrement10k}>-10k</button>
            <QuantidadeInput quantidade={quantidade} onQuantidadeChange={(value) => onQuantidadeChange(value)} />
            <button onClick={onIncrement1k}>+1k</button>
            <button onClick={onIncrement10k}>+10k</button>
        </div>
    )
}

export default IncrementButtons