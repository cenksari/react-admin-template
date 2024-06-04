/**
 * Format number as british currency.
 *
 * @param {number} value - Currency
 * @return {string} - Formatted string value
 */
export const formatCurrency = (value: number): string =>
  new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    currencyDisplay: 'symbol',
  }).format(value);

export default { formatCurrency };
