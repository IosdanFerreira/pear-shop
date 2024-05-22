export const transformCurrencyInBRL = (currency: string | number) => {
    const transformedCurrency = currency.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  
    return transformedCurrency;
  };