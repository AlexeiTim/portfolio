const MILLISECOND_IN_YEAR = 31536000000;

export const getMyAge = (date: string) => {
  const currentDate: number = Date.now();
  const ageMilliseconds: number = currentDate - new Date(date).getTime();
  return Math.floor(ageMilliseconds / MILLISECOND_IN_YEAR);
};
