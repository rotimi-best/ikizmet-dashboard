import React from 'react';

import Header from './Header';
import GroupBy from '../GroupBy';
import DateRangePicker from '../DateRangePicker';
import Loader from '../Loader';
import Chart from './Chart';
import Tiles from '../Tiles'

import {
  restructureData,
  getDataWithinRange,
  getDataOfLastXDays,
  groupByMonths,
  groupByQuarters,
  groupByYears
} from '../../helpers';
import { fetchApiData } from '../../api';
import groupByConstants from '../../constants/groupBy';
import './BarChart.css';

let rawApiData = null;

function BarChart() {
  const [apiData, setApiData] = React.useState(null);
  const [formattedData, setFormattedData] = React.useState();
  const currentGroupType = React.useRef(groupByConstants.DAYS);

  React.useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    async function getInitData() {
      const data = await fetchApiData({ signal });
      rawApiData = restructureData(data);

      setFormattedData(getDataOfLastXDays(rawApiData.data));
      setApiData(rawApiData);
    }

    getInitData();

    return () => {
      abortController.abort()
    }
  }, []);

  if (!apiData) {
    return <Loader />;
  }

  const handleGroupByChange = (groupType, data = apiData.data) => {
    currentGroupType.current = groupType;
    switch (groupType) {
      case groupByConstants.DAYS:
        const restructuredDaysData = getDataOfLastXDays(data)
        setFormattedData(restructuredDaysData);
        break;
      case groupByConstants.MONTHS:
        const restructuredMonthsData = groupByMonths(data);
        setFormattedData(restructuredMonthsData);
        break;
      case groupByConstants.QUATERS:
        const restructuredQuartersData = groupByQuarters(data);
        setFormattedData(restructuredQuartersData);
        break;
      case groupByConstants.YEARS:
        // Future version
        const restructuredYearsData = groupByYears(data);
        setFormattedData(restructuredYearsData);
        break;
      default:
        break;
    }
  };

  const handleDatePickerChange = (dateRange) => {
    if (!dateRange.length) {
      setApiData(rawApiData);
      handleGroupByChange(currentGroupType.current, rawApiData.data);
      return;
    }

    const [startDate, endDate] = dateRange;
    const filteredDataByDate = getDataWithinRange(rawApiData.data, startDate, endDate);

    setApiData({
      ...apiData,
      data: filteredDataByDate
    });
    handleGroupByChange(currentGroupType.current, filteredDataByDate);
  }


  return (
    <div className="line-chart-container">
      <Header
        title={apiData.chartTitle}
        subTitle={apiData.chartSubTitle}
      />

      <div className="bar-chart-explore-wrapper">
        <DateRangePicker
          handleDatePickerChange={handleDatePickerChange}
        />
        <GroupBy
          handleGroupByChange={handleGroupByChange}
        />
      </div>

      <Chart
        formattedData={formattedData}
        legend={apiData.legend}
        currencySymbol={apiData.currencySymbol}
      />

      <Tiles
        data={formattedData}
        legend={apiData.legend}
        currencySymbol={apiData.currencySymbol}
      />
    </div>
  )
}

export default BarChart;