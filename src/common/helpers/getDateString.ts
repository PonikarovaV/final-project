import { getFormattedDateItem } from './getFormattedDateItem';

/**
 * Функция возвращает форматированный элемент даты
 *
 * @example
 * // returns '01.11.2021' - текущая дата
 * getDateString();
 * */
export const getDateString = () => {
  const date = new Date();

  const day = getFormattedDateItem(date.getDate().toString());
  const month = getFormattedDateItem((date.getMonth() + 1).toString());
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
};
