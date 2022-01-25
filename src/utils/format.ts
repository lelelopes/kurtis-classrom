export const formatAmount = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

export const formatDate = (value: string) => {
  return new Intl.DateTimeFormat('pt-BR').format(new Date(value))
}
