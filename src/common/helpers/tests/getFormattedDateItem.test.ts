import { getFormattedDateItem } from '../getFormattedDateItem';

describe('Get formatted date element', () => {
  test('Should return "01" if "1"', () => {
    expect(getFormattedDateItem('1')).toBe('01');
  });

  test('Should return "11" if "11"', () => {
    expect(getFormattedDateItem('11')).toBe('11');
  });
});
