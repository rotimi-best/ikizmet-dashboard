export const calcDayWithMaxExpenses = data => {
  return data.reduce((acc, stat) => {
    if (acc.total === 0) {
      acc.date = stat.date;
      acc.expenses = stat.Expenses;
    } else {
      const foundMaxExpenses = stat.Expenses < acc.expenses;
      acc.expenses = foundMaxExpenses ? stat.Expenses : acc.expenses;
      acc.date = foundMaxExpenses ? stat.date : acc.date;
    }

    return acc;
  }, { date: '', expenses: 0 });
}