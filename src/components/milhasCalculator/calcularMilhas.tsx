interface calculadoraProps {
    valorMilheiro: number
    valorDesconto: number
    bonus: number
    qtdComprada: number
}

export function calculadoraMilhas({
    valorMilheiro,
    valorDesconto,
    bonus,
    qtdComprada
}: calculadoraProps) {
    const calcularMilhas = () => {
        const qtdMilheiro = qtdComprada * (bonus/100)
        const valorPagamento = valorMilheiro * (valorDesconto/100);
        const totalMilheiro = valorPagamento / qtdMilheiro
        return totalMilheiro
    }
}