export function formatNumberToPersian(input: number | string): string {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";

  // Convert only if the input is a number or a string containing numbers
  if (typeof input !== 'number' && !/^\d+$/.test(input)) {
      return input.toString();
  }

  // If the input is a date string, convert only numeric parts
  if (typeof input === 'string' && /\d+/.test(input)) {
      return input.replace(/\d/g, match => persianDigits[parseInt(match, 10)]).replace(/\//g, '۔');
  }

  // If the input is a number or a string containing only numbers, convert the numbers
  return input.toString().replace(/\d/g, match => persianDigits[parseInt(match, 10)]).replace(/\//g, '۔');
}
