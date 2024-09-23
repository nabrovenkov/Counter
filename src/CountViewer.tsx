import { Count } from "./components/styled/Count"

type CountViewerProps = {
	incorrectValue: boolean;
	redValue: boolean;
	setValue: number;
	setButtonDisable: boolean;
};

export const CountViewer = ({
	incorrectValue,
	redValue,
	setValue,
	setButtonDisable,
}: CountViewerProps) => {
	const countScreen = () => {
		if (setButtonDisable ) {
			if (setValue || setValue === 0) {
				return (
					<div>{setValue}</div>
				);
			}
		} else {
				return incorrectValue ? (
					<div>Incorrect value!</div>
				) : (
					<div>Enter values and press 'set'</div>
				);
			}
	}

	return (
		<>
			<Count $incorrectValue={incorrectValue} $redValue={redValue}>
				{countScreen()}
			</Count>
		</>
	);
};