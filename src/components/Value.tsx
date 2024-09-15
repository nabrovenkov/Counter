import { ChangeEvent, useState } from 'react';
import { styled } from 'styled-components';

type ValuePropsType = {
	name: string;
	getValue: (name: string, value: string) => void;
	value: string;
};

export const Value = ({ name, getValue, value }: ValuePropsType) => {
	const [error, setError] = useState('');

	let resultingValue = Number(value);

	const getValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.currentTarget.value;

		getValue(name, value);
	};

	const receivedValue = () => {

		if (resultingValue < 0) {
			setError('red');
		} else {
			setError('white');
		}
	};

	return (
		<Wrapper>
			<ValueText>{name} Value: </ValueText>
			<SetCounter
				type='number'
				value={value}
				onChange={getValueHandler}
				error={error}
			/>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
	width: 100%;
`;

const ValueText = styled.div`
	/* display: flex; */
	color: #5b77ac;
	font-size: 20px;
	font-weight: 600;
`;

const SetCounter = styled.input<{ error: any }>`
	max-width: 150px;
	width: 100%;
	min-height: 30px;

	background-color: ${(props) => props.error};
	border: 5px solid #5b77ac;
	border-radius: 10px;

	line-height: 30px;
	text-align: center;
	font-weight: 600;
`;
