/** Прокрутка к началу страницы */
export const scrollToTop = () => (
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
);
