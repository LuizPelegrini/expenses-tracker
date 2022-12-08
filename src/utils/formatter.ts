export const dateFormatter = new Intl.DateTimeFormat('en-MY');

export const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
