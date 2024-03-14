import { ChangeEvent, useState } from 'react';
import { Value } from './Value';
import { ValueWrapper } from './styled/ValueWrapper';

export const Values = () => {
	// const [value, setValue] = useState<any>('');

	const getValue = (checkValue: any) => {
		const getValue = checkValue;
    
		console.log(getValue);
	};

	return (
		<ValueWrapper>
			<Value name='Max Value:' getValue={getValue} />
			<Value name='Start Value:' getValue={getValue} />
		</ValueWrapper>
	);
};
