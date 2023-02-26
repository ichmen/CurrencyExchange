import { apiAnswer } from './utils';
const baseUrl = 'https://api.exchangerate.host/latest';

export function getCurrencyRates() {
  return new Promise(resolve => resolve(apiAnswer)).then(data => data);

  //   fetch(baseUrl)
  //     .then(response => response.json())
  //     .then(data => data);
}
