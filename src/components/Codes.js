import React, { useState, useCallback, useRef } from 'react';
import copy from 'copy-to-clipboard';
import { useOverrides } from '@quarkly/components';
import { Box, Text, Button } from '@quarkly/widgets';
let overrides = {
	'Code Text': {
		kind: 'Text'
	},
	'Code Button': {
		kind: 'Button'
	},
	'Code Alert': {
		kind: 'Text'
	}
};

const Code = props => {
	const {
		override,
		rest
	} = useOverrides(props, overrides);
	const [isAlert, toggleAlert] = useState(false);
	const textRef = useRef(null);
	const handlerCopy = useCallback(() => {
		if (!isAlert && textRef.current) {
			copy(textRef.current.innerText);
			toggleAlert(true);
			setTimeout(() => toggleAlert(false), 5000);
		}
	}, [isAlert]);
	return <Box position="relative" {...rest}>
		      
		<Text
			padding="22px 16px"
			max-height="310px"
			font-family="--fontFamily-mono"
			font-size="14px"
			line-height="18px"
			background-color="--dark"
			color="--light"
			white-space="pre"
			overflow="auto"
			ref={textRef}
			{...override('Code Text')}
		>
			        
			{override('Code Text').children || 'Ваш код здесь!'}
			      
		</Text>
		      
		<Text
			bottom="16px"
			left="16px"
			margin="0px"
			padding="8px 16px"
			font-size="14px"
			line-height="1"
			color="--dark"
			background-color="--light"
			transition="transform .5s ease, opacity .5s ease"
			pointer-events="none"
			user-select="none"
			position="absolute"
			transform={`translateY(${isAlert ? '0' : '8px'})`}
			opacity={isAlert ? 1 : 0}
			{...override('Code Alert')}
		>
			        
			{override('Code Alert').children || 'Код скопирован в буфер обмена!'}
			      
		</Text>
		    
	</Box>;
};

export default Object.assign(Code, {
	title: 'Code',
	overrides
});