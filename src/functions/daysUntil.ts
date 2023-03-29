export const daysUntil = (date: Date) => {
  const today = new Date();
  const oneDay = 1000 * 60 * 60 * 24;
  const msUntil = date.getTime() - today.getTime();
  return Math.round(msUntil / oneDay);
};
