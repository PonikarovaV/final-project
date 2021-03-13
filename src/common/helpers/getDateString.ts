import { getFormattedDateItem } from './getFormattedDateItem';

export const getDateString = () => {
  const date = new Date();

  const day = getFormattedDateItem(date.getDate().toString());
  const month = getFormattedDateItem((date.getMonth() + 1).toString());
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
};
