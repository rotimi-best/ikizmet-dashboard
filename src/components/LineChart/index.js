import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

import Header from './Header';
import DateRangePicker from '../DateRangePicker';
import Loader from '../Loader';

import {
  restructureData,
  getDataOfLastXDays
} from '../../helpers';
import config from '../../config';
import data from './data.json';
import './LineChart.css';

function LineChart() {
  const [apiData, setApiData] = React.useState(null);

  React.useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const fetchData = async () => {
      fetch(config.apiUrl, {
        method: 'GET',
        signal
      })
      .then(response => response.json())
      .then(data => {
        const structuredData = restructureData(data);
        setApiData(structuredData);
      });
    }

    // fetchData();
    const structuredData = restructureData(data);
    setApiData(structuredData);
    return () => {
      abortController.abort()
    }
  }, []);
  if (!apiData) {
    return <Loader />;
  }

  const lastThirthyDays = getDataOfLastXDays(apiData.data);
  console.log('lastThirthyDays', lastThirthyDays)
  return (
    <div className="line-chart-container">
      <Header
        title={apiData.chartTitle}
        subTitle={apiData.chartSubTitle}
      />
      <DateRangePicker />
      <ResponsiveBar
        data={lastThirthyDays}
        keys={apiData.legend}
        indexBy="date"
        margin={{ top: 50, right: 130, bottom: 100, left: 60 }}
        padding={0.3}
        colors={{ scheme: 'set3' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'Expenses'
                },
                id: 'lines'
            }
        ]}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 0,
            tickPadding: 5,
            tickRotation: -45,
            legend: 'Date',
            legendPosition: 'middle',
            legendOffset: 50
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: `Amount spent (${apiData.currencySymbol})`,
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 50,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 40,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  )
}

export default LineChart;