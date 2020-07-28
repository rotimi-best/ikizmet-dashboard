export const calcPercOfRevenueToExpenses = data => {
  const [totalRevenue, totalExpenses] = data.reduce((acc, stat) => {
    acc[0] += Object.keys(stat).reduce((acc, key) => {
      if (key !== 'Expenses' && key !== 'date') {
        acc += parseInt(stat[key], 10);
      }
      return acc;
    }, 0);

    acc[1] += Math.abs(stat.Expenses);
    return acc;
  }, [0, 0]);

  // Formular can be found here https://www.calculatorsoup.com/calculators/algebra/percent-difference-calculator.php
  return Math.ceil(((totalRevenue - totalExpenses) / ((totalRevenue + totalExpenses) / 2)) * 100);
}
