const dateFormatter = (date: Date): string =>
  Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);

const moneyFormatter = (value: number): string =>
  Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
    value
  );

export { dateFormatter, moneyFormatter };
