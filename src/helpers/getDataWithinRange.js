export const getDataWithinRange = (data, startDate, endDate) => {
  const startDateTime = new Date(startDate).getTime();
  const endDateTime = new Date(endDate).getTime();

  return data.filter(({ date }) => {
    const dateTime = new Date(date).getTime();

    return dateTime >= startDateTime && dateTime <= endDateTime;
  });
}