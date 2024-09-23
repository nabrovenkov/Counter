import { styled } from 'styled-components';

export const Count = styled.div<{ $incorrectValue: boolean; $redValue: boolean }>`
	font-size: ${(props) => (props.$redValue ? '60px' : '30px')};
	font-weight: 600;
	align-items: 200px;
	color: ${(props) => (props.$incorrectValue ? 'red' : '#5b77ac')};
	color: ${(props) => props.$redValue && 'red'};
`;
