import React from 'react';
import {
  Container,
  Content,
  Footer,
} from 'rsuite';

import LineChart from './components/LineChart';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <Container>
      <Header />
      <Content>
        <LineChart />
      </Content>
      <Footer>Footer</Footer>
    </Container>
  );
}

export default App;
