import React from 'react';
import './App.css';
import { CounterWrapper } from './components/styled/CounterWrapper';
import { Counter } from './components/styled/Counter';
import { ValueWrapper } from './components/styled/ValueWrapper';
import { ButtonWrapper } from './components/styled/ButtonWrapper';
import { Button } from './components/Button';
import { Count } from './components/styled/Count';
import { Values } from './components/Values';

export type ButtonType = {
	name: string;
};

function App() {
	return (
		<div className='App'>
			<CounterWrapper>
				<Counter>
					<Values />
					<ButtonWrapper>
						<Button name={'Set'} />
					</ButtonWrapper>
				</Counter>
				<Counter>
					<ValueWrapper>
						<Count>5</Count>
					</ValueWrapper>
					<ButtonWrapper>
						<Button name={'Inc'} />
						<Button name={'Reset'} />
					</ButtonWrapper>
				</Counter>
			</CounterWrapper>
		</div>
	);
}

export default App;
