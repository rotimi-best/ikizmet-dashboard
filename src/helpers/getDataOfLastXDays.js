export const getDataOfLastXDays = (data, minDay = 30) => {
  // const minDateTime = new Date(Date.now() - minDay * 24 * 60 * 60 * 1000);
  // return data.filter(({ date }) => new Date(date).getTime() > minDateTime.getTime());
  return data.slice(Math.max(data.length - minDay, 0))
};