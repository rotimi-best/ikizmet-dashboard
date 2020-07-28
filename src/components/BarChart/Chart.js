import React from 'react';
// import PropTypes from 'prop-types';
import { ResponsiveBar } from '@nivo/bar';

function Chart({
  formattedData,
  legend,
  currencySymbol
}) {

  return (
    <ResponsiveBar
      data={formattedData}
      keys={legend}
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
          legendOffset: 70
      }}
      axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: `Amount spent (${currencySymbol})`,
          legendPosition: 'middle',
          legendOffset: -54
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
  )
}

export default Chart;