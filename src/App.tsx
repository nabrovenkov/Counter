import React, { useEffect, useState } from 'react';
import './App.css';
import { CounterWrapper } from './components/styled/CounterWrapper';
import { Counter } from './components/styled/Counter';
import { ValueWrapper } from './components/styled/ValueWrapper';
import { ButtonWrapper } from './components/styled/ButtonWrapper';
import { Button } from './components/Button';
import { Value } from './components/Value';
import { CountViewer } from './CountViewer';

export type ButtonType = {
	name: string;
};

export type Value = {
	id: number;
	value: string;
};

function App() {

	const getLocalStorageValueByKey = (key: string) => {
		const valueLocalStorage = localStorage.getItem(key) !== null
			? JSON.parse((localStorage.getItem(key) as string))
			: 0;
		return valueLocalStorage
	};

	const [maxValue, setMaxValue] = useState(
		getLocalStorageValueByKey('maxValue'),
		
	);
	const [startValue, setStartValue] = useState(
		getLocalStorageValueByKey('startValue')
	);
	const [setValue, setSetValue] = useState(
		getLocalStorageValueByKey('setValue')
	);

	const startInCorrectValue = startValue < 0 || startValue >= maxValue || maxValue <= 0;
	
	const [incorrectValue, setIncorrectValue] = useState(startInCorrectValue);
	const [reachingMaxValue, setReachingMaxValue] = useState(false);
	const [setButtonDisable, setSetButtonDisable] = useState(false);

	
	
	useEffect(() => {
		localStorage.setItem('setValue', JSON.stringify(setValue));
	}, [setValue]);

	useEffect(() => {
		localStorage.setItem('startValue', JSON.stringify(startValue));
	}, [startValue]);

	useEffect(() => {
		localStorage.setItem('maxValue', JSON.stringify(maxValue));
	}, [maxValue]);

	useEffect(() => {
		if (setValue === maxValue) {
			setReachingMaxValue(true);
		}
	}, [setValue]);

	const getValue = (name: string, newValue: number) => {
		// debugger
		if (name === 'Max') {
			setMaxValue(newValue);
			if (newValue <= startValue || newValue <= 0 || startValue < 0) {
				setIncorrectValue(true);
			} else {
				setIncorrectValue(false);
			}
		} else {
			setStartValue(newValue);
			if (newValue < 0 || newValue >= maxValue) {
				setIncorrectValue(true);
			} else {
				setIncorrectValue(false);
			}
		}
		setSetButtonDisable(false);
	};

	const settingValue = () => {
		setSetValue(startValue);
		setReachingMaxValue(false);
		setSetButtonDisable(true);
	};

	const resetValue = () => {
		setSetValue(startValue);
		setReachingMaxValue(false);
		localStorage.removeItem(setValue);
	};

	const incValue = () => {
		setValue !== maxValue && setSetValue(setValue + 1);
	};

	return (
		<div className='App'>
			<CounterWrapper>
				<Counter>
					<ValueWrapper>
						<Value
							name={'Max'}
							getValue={getValue}
							value={maxValue}
							incorrectValue={incorrectValue}
						/>
						<Value
							name={'Start'}
							getValue={getValue}
							value={startValue}
							incorrectValue={incorrectValue}
						/>
					</ValueWrapper>
					<ButtonWrapper>
						<Button
							name={'Set'}
							onClick={settingValue}
							incorrectValue={incorrectValue}
							setButtonDisable={setButtonDisable}
						/>
					</ButtonWrapper>
				</Counter>
				<Counter>
					<ValueWrapper>
						<CountViewer
							incorrectValue={incorrectValue}
							redValue={reachingMaxValue}
							setValue={setValue}
							setButtonDisable={setButtonDisable}
						/>
					</ValueWrapper>
					<ButtonWrapper>
						<Button
							name={'Inc'}
							onClick={incValue}
							incDisable={reachingMaxValue}
							incorrectValue={incorrectValue}
							setButtonDisable={!setButtonDisable}
						/>
						<Button
							name={'Reset'}
							onClick={resetValue}
							incorrectValue={incorrectValue}
							setButtonDisable={!setButtonDisable}
						/>
					</ButtonWrapper>
				</Counter>
			</CounterWrapper>
		</div>
	);
}

export default App;
