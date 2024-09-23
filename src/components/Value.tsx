import { ChangeEvent, useState } from 'react';
import { styled } from 'styled-components';

type ValuePropsType = {
	name: string;
	getValue: (name: string, value: number) => void;
	incorrectValue: boolean;
	value: number;
};

export const Value = ({ name, getValue, incorrectValue, value }: ValuePropsType) => {
	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newValue = +event.currentTarget.value;

		getValue(name, newValue);
	};

	return (
		<Wrapper>
			<ValueText>{name} Value: </ValueText>
			<SetCounter
				type='number'
				value={value}
				onChange={handleInputChange}
				$showingError={incorrectValue}
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

const SetCounter = styled.input<{ $showingError: boolean }>`
	max-width: 150px;
	width: 100%;
	min-height: 30px;

	background-color: ${(props) => props.$showingError ? 'red' : 'white'};
	border: 5px solid #5b77ac;
	border-radius: 10px;

	line-height: 30px;
	text-align: center;
		font-weight: 600;
`;
