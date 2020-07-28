export const calcAverageRevenue = (data, legends) => {
  const N = data.length;
  const totalBalance = data.reduce((acc, stat) => {
    for (const legend of legends) {
      acc += stat[legend];
    }

    return acc;
  }, 0);

  return Math.round(totalBalance / N);
}
