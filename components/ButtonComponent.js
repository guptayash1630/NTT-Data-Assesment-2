import React from "react";
import styled from "styled-components";

const StyledButton = styled.input.attrs({ type: "button" })`
background-color: #e7e7e7;
border: none;
color: black;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;;
`;

const Button = ({ ...props }) => <StyledButton {...props} />;

export default Button;
