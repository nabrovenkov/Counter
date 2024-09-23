import { styled } from 'styled-components';
// import { ButtonType } from '../App';

type ButtonType = {
	name: string;
	onClick: (name: string) => void;
	incorrectValue?: boolean;
	incDisable?: boolean;
	setButtonDisable?: boolean;
};

export const Button = ({
	name,
	onClick,
	incorrectValue,
	incDisable,
	setButtonDisable,
}: ButtonType) => {
	const onClickHandler = () => {
		onClick(name);
	};

	return (
		<ButtonStyled
			onClick={onClickHandler}
			disabled={incorrectValue || incDisable || setButtonDisable}
		>
			{name}
		</ButtonStyled>
	);
};

const ButtonStyled = styled.button`
	font-size: 50px;
	background-color: #5b77ac;
	border-radius: 10px;
	/* height: 80%; */
`;
