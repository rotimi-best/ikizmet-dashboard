import React from 'react'
import {
  Grid,
  Row,
  Col
} from 'rsuite';

import {
  calcAverageRevenue,
  calcPercOfRevenueToExpenses,
  calcMostProfitableDay,
  calcDayWithMaxExpenses
} from '../../helpers'

import './Tiles.css';

export default function Tiles({ data, legend, currencySymbol }) {

  return (
    <Grid  className="tiles-grid" fluid>
      <Row className="tiles-row" gutter={9}>
        <Col xs={24} sm={24} md={5} className="tiles-col">
          <span className="tile-col-text">Average Revenue</span>
          <span className="tile-col-value">{currencySymbol}{calcAverageRevenue(data, legend)}</span>
        </Col>
        <Col xs={24} sm={24} md={5} className="tiles-col">
          <span className="tile-col-text">Most profitable day</span>
          <span className="tile-col-value">{calcMostProfitableDay(data).date}</span>
        </Col>
        <Col xs={24} sm={24} md={5} className="tiles-col">
          <span className="tile-col-text">Day with maximum value of expenses</span>
          <span className="tile-col-value">{calcDayWithMaxExpenses(data).date}</span>
        </Col>
        <Col xs={24} sm={24} md={5} className="tiles-col">
          <span className="tile-col-text">Percentage of Services + Recurring + Products compare to Expenses</span>
          <span className="tile-col-value">{calcPercOfRevenueToExpenses(data)}%</span>
        </Col>
      </Row>
    </Grid>
  )
}
