/**
 * Formats a number as a currency string in GBP with the symbol.
 *
 * @param {number} value - The number to format.
 * @returns {string} The formatted currency string.
 */
export const formatCurrency = (value: number): string =>
  new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    currencyDisplay: 'symbol',
  }).format(value);
