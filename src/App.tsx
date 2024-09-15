import React, { useState } from 'react';
import './App.css';
import { CounterWrapper } from './components/styled/CounterWrapper';
import { Counter } from './components/styled/Counter';
import { ValueWrapper } from './components/styled/ValueWrapper';
import { ButtonWrapper } from './components/styled/ButtonWrapper';
import { Button } from './components/Button';
import { Count } from './components/styled/Count';
import { Value } from './components/Value';

export type ButtonType = {
	name: string;
};

export type Value = {
	id: number;
	value: string;
};

function App() {
	const [maxValue, setMaxValue] = useState('');
	const [startValue, setStartValue] = useState('');

	const getValue = (name: string, value: string) => {
		if (name === 'Max') {
			setMaxValue(value)
		} else {
			setStartValue(value)
		}
	};

	const onButtonClick = (name: string) => {
		console.log(name);
	};

	return (
		<div className='App'>
			<CounterWrapper>
				<Counter>
					<ValueWrapper>
						<Value name={'Max'} getValue={getValue} value={maxValue}/>
						<Value name={'Start'} getValue={getValue} value={startValue}/>
					</ValueWrapper>
					<ButtonWrapper>
						<Button name={'Set'} onClick={onButtonClick} />
					</ButtonWrapper>
				</Counter>
				<Counter>
					<ValueWrapper>
						<Count>5</Count>
					</ValueWrapper>
					<ButtonWrapper>
						<Button name={'Inc'} onClick={onButtonClick} />
						<Button name={'Reset'} onClick={onButtonClick} />
					</ButtonWrapper>
				</Counter>
			</CounterWrapper>
		</div>
	);
}

export default App;
