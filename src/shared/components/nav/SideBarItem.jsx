import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
	display: flex;
	align-items: center;
	font-size: 20px;
	padding: 10px;
	cursor: pointer;
	border-radius: 10px;
	margin: 0 15px 20px;
	> svg {
		margin: 0 20px;
	}
	&:hover {
		background-color: black;
		color: white;
	}
`;

const SidebarItem = ({ Text }) => {
	return <Container>{Text}</Container>;
};

export default SidebarItem;
