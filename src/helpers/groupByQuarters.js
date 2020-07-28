export const groupByQuarters = (data) => {
  const quarters = {};

  for (const dataElement of data) {
    const {date, ...rest} = dataElement;
    const dateConstructor = new Date(date);
    const year = dateConstructor.getFullYear();
    const quarter = `${Math.floor(dateConstructor.getMonth() / 3) + 1} (${year})`;
    const existingQuarter = quarters[quarter];

    if (existingQuarter) {
      quarters[quarter] = Object.keys(rest).reduce((acc, key) => {
        acc[key] = rest[key] + existingQuarter[key];
        return acc;
      }, { date: `Q${quarter}` });
    } else {
      quarters[quarter] = {
        date: quarter,
        ...rest
      }
    }
  }

  return Object.values(quarters);
}