import React from 'react';
import './App.css';
import { CounterWrapper } from './components/styled/CounterWrapper';
import { Counter } from './components/styled/Counter';
import { ValueWrapper } from './components/styled/ValueWrapper';
import { ButtonWrapper } from './components/styled/ButtonWrapper';

function App() {
  return (
    <div className="App">
      <CounterWrapper>
        <Counter>
          <ValueWrapper>

          </ValueWrapper>
          <ButtonWrapper></ButtonWrapper>
        </Counter>
      </CounterWrapper>
    </div>
  );
}

export default App;
