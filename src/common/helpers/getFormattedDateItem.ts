/**
 * Функция возвращает форматированный элемент даты
 * @param {dateItem} - элемент даты (месяц/число)
 *
 * @example
 * // returns '01'
 * getFormattedDateItem('1');
 * @example
 * // returns '11'
 * getFormattedDateItem('11');
 * */
export const getFormattedDateItem = (dateItem: string) => (
  dateItem.length === 1 ? `0${dateItem}` : dateItem
);
