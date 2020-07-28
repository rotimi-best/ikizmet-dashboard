import React from 'react';
import {
  Container,
  Content,
} from 'rsuite';

import BarChart from './components/BarChart';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <Container>
      <Header />
      <Content>
        <BarChart />
      </Content>
    </Container>
  );
}

export default App;
