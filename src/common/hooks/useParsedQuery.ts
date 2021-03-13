import { useLocation } from 'react-router-dom';
import qs from 'qs';

export interface UseParsedQueryOutput {
  [x: string]: string | string[] | undefined,
}

/** Хук для получения распарсенных параметров query */
export const useParsedQuery = (): UseParsedQueryOutput => {
  const { search } = useLocation();

  return qs.parse(search, { ignoreQueryPrefix: true }) as UseParsedQueryOutput;
};
