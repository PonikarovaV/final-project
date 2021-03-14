export interface Pokemon {
  /** Имя покемона */
  name: string,
  /** id покемона */
  id: number,
  /** Статус покемона (пойман/не пойман) */
  catched?: boolean,
  /** Дата поимки покемона dd.mm.yyyy */
  catchDate?: string,
}
