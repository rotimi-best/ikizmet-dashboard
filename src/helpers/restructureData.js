export const restructureData = (apiData) => {
  const newDataFormat = [];
  const { legend, data } = apiData;

  for (const dataElement of data) {
    const [barDate, barLegendValues] = dataElement;
    const barLegends = barLegendValues
      .reduce((acc, barLegendValue, i) => {
        acc[legend[i]] = barLegendValue;
        return acc;
      }, {});

    const bar = {
      date: barDate,
      ...barLegends
    };

    newDataFormat.push(bar);
  }

  apiData.data = newDataFormat

  return apiData;
}