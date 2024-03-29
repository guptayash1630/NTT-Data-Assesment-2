import React from "react";
import styled from "styled-components";

const Container = styled.div`
	display: inline-block;
	vertical-align: middle;
`;

const Icon = styled.svg`
	fill: none;
	stroke: black;
	stroke-width: 3px;
	margin-bottom: 4px;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
	border: 0;
	clip: rect(0 0 0 0);
	clippath: inset(50%);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	white-space: nowrap;
	width: 1px;
`;

const StyledCheckbox = styled.div`
	display: inline-block;
	width: 16px;
	height: 16px;
	border: 1px solid;
	border-radius: 3px;
	transition: all 150ms;
	margin-top: 8px;
	${HiddenCheckbox}:focus + & {
		box-shadow: 0 0 0 2px #04b1ff7a;
	}

	${Icon} {
		visibility: ${props => (props.checked ? "visible" : "hidden")};
	}
`;

const Checkbox = ({ checked, ...props }) => (
	<Container className='checkbox'>
		<HiddenCheckbox checked={checked} {...props} />
		<StyledCheckbox checked={checked}>
			<Icon viewBox="0 0 24 24">
				<polyline points="20 6 9 17 4 12" />
			</Icon>
		</StyledCheckbox>
	</Container>
);

export default Checkbox;
