export const getFormattedDateItem = (dateItem: string) => (
  dateItem.length === 1 ? `0${dateItem}` : dateItem
);
