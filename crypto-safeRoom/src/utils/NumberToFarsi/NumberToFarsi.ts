export function formatNumberToPersian(number: number): string {
    const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
    return number
      .toString()
      .replace(/[0-9]/g, (match) => persianDigits[Number(match)]);
  }