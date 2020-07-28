export const groupByYears = (data) => {
  const years = {};

  for (const dataElement of data) {
    const {date, ...rest} = dataElement;
    const year = `${new Date(date).getFullYear()}`;
    const existingYear = years[year];

    if (existingYear) {
      years[year] = Object.keys(rest).reduce((acc, key) => {
        acc[key] = rest[key] + existingYear[key];
        return acc;
      }, { date: year });
    } else {
      years[year] = {
        date: year,
        ...rest
      }
    }
  }

  return Object.values(years);
}