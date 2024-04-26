import styled from "styled-components";

export const NavbarContainer = styled.nav`
	width: 100%;
	font-family: "Plus Jakarta Sans";
`;

export const NavbarLinkContainer = styled.div`
	width: 100%;
	display: inline-flex;
	align-items: flex-start;
	gap: 8px;
`;
export const NavbarLink = styled.button`
	color: #0a0a18;
	font-size: 12px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	letter-spacing: -0.12px;
	border-radius: 10px;
	background: #f8f8f8;
	border: 1px solid #f8f8f8;
	text-decoration: none;
	padding: 10px 20px;
	gap: 3px;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: flex-start;

	svg {
		font-weight: bold;
		font-size: 14px;
	}

	&.active {
		border: 1px solid #08a8d2;
		background: #bdddeb;
		&:hover,
		&:focus {
			border: 1px solid #08a8d2;
			background: #bdddeb;
		}
	}

	&.line {
		padding: 0 12px 14px 12px;
		border-radius: 0;
		background-color: transparent;
		border: none;
		&:hover,
		&:focus {
			border: none;
			border-bottom: 2px solid #55b5df;
			background: transparent;
		}

		&.active {
			border-bottom: 2px solid #55b5df;
			background-color: transparent;
		}
	}
`;
