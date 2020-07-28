Date.prototype.getMonthName = function() {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return monthNames[this.getMonth()];
}

export const groupByMonths = (data) => {
  const months = {};

  for (const dataElement of data) {
    const {date, ...rest} = dataElement;
    const dateConstructor = new Date(date);
    const year = dateConstructor.getFullYear();
    const month = `${dateConstructor.getMonthName()} (${year})`;
    const existingMonth = months[month];

    if (existingMonth) {
      months[month] = Object.keys(rest).reduce((acc, key) => {
        acc[key] = rest[key] + existingMonth[key];
        return acc;
      }, { date: month });
    } else {
      months[month] = {
        date: month,
        ...rest
      }
    }
  }

  return Object.values(months);
}