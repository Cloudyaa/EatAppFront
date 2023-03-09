export const offsetScroll = (el: Element) => {
  const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
  let yOffset: number;
  window.innerWidth < 800 ? (yOffset = -80) : (yOffset = -40);
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
};
