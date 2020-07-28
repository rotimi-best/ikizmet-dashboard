const sumObjectValues = stat => Object.values(stat)
  .reduce((a, b) => !isNaN(b) ? a + b : a, 0);

export const calcMostProfitableDay = data => {
  return data.reduce((acc, stat) => {
    if (acc.total === 0) {
      acc.date = stat.date;
      acc.total = sumObjectValues(stat);
    } else {
      const newTotal = sumObjectValues(stat);
      const foundNewMax = newTotal > acc.total;
      acc.total = foundNewMax ? newTotal : acc.total;
      acc.date = foundNewMax ? stat.date : acc.date;
    }

    return acc;
  }, { date: '', total: 0 });
}