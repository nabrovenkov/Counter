import { ChangeEvent, useState } from 'react';
import { styled } from 'styled-components';

type ValueType = {
	name: string;
	// value: any;
	getValue: (event: any) => void;
};

export const Value = ({ name, getValue }: ValueType) => {
	const [error, setError] = useState('');
	const [value, setValue] = useState('');

	const getValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
		const checkValue = Number(event.currentTarget.value);
		if (Number.isNaN(checkValue) || checkValue <= 0) {
			setError('red');
		} else {
			setError('white');
		}
		getValue(checkValue);
	};

	return (
		<Wrapper>
			<ValueText>{name}</ValueText>
			<SetCounter onChange={getValueHandler} error={error} />
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
