import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '@fontsource/plus-jakarta-sans';

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 50px;
  background-color: purple;
  display: flex;
  flex-direction: column;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;
export const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  &:hover,
  &:focus {
    color: blue;
  }
  &:active {
    color: red;
  }
`;

// export const NavBarContainer = styled.nav<{ admin: boolean }>`
// 	background-color: ${(props) => (props.admin ? "#FFFFFF" : "#FFDC50")};
// 	padding: 32px;
// 	display: flex;
// 	flex-direction: column;
// 	flex-wrap: wrap;
// 	align-items: center;
// 	z-index: 1;
// 	font-family: "Plus Jakarta Sans";
// 	width: 252px;
// 	min-height: 990px;
// 	height: 100vh;
// 	position: fixed;

// 	.logo {
// 		text-decoration: none;
// 		font-style: normal;
// 		font-weight: 600;
// 		font-size: 32px;
// 		line-height: 150%;
// 		display: flex;
// 		align-items: center;
// 		letter-spacing: -0.03em;
// 		color: #030410;
// 		margin-bottom: 60px;

// 		img {
// 			width: 40px;
// 			margin-right: 12px;
// 		}
// 	}

// 	.menu-items {
// 		.menu-hidden {
// 			display: none;
// 			margin-bottom: 10px;
// 			text-align: center;
// 			width: 100%;
// 		}
// 		ul {
// 			margin-right: 20px;
// 			display: flex;
// 			flex-direction: column;
// 			flex-wrap: wrap;
// 			align-items: center;
// 			text-align: center;

// 			li {
// 				padding: 12px 22px;
// 				margin-bottom: 24px;
// 				width: 180px;

// 				&.active {
// 					background: #ffffff;
// 					border-radius: 10px;
// 				}

// 				a {
// 					text-decoration: none;
// 					color: #030410;
// 					display: flex;
// 					align-items: center;
// 				}

// 				span {
// 					width: 24px;
// 					height: 24px;
// 					margin-right: 14px;

// 					img {
// 						height: 100%;
// 					}
// 				}
// 			}
// 		}

// 		@media screen and (max-height: 790px) {
// 			.menu-hidden {
// 				display: block;
// 			}
// 			ul {
// 				height: 30px;
// 				li {
// 					visibility: hidden;
// 				}
// 			}
// 			ul:hover {
// 				background-color: #ffdc50;
// 				height: fit-content;
// 				z-index: 100;
// 				li {
// 					visibility: visible;
// 					&:hover {
// 						border: #ffffff 2px solid;
// 						border-radius: 10px;
// 						width: 98%;
// 					}
// 				}
// 			}
// 		}
// 	}

// 	.desktop {
// 		display: block;
// 	}
// 	.mobile {
// 		display: none;
// 	}
// 	@media screen and (max-width: 850px) {
// 		#nav-list {
// 			width: 65vw;
// 		}
// 	}
// 	@media screen and (max-width: 600px) {
// 		padding: 5px;
// 		.navbar-brand {
// 			width: 145px;
// 			margin: 0 !important;

// 			img {
// 				width: 100%;
// 			}
// 		}
// 		.menu-items {
// 			margin-top: -41px;
// 			width: 100vw;
// 		}

// 		.desktop {
// 			display: none;
// 		}
// 		.mobile {
// 			display: block;
// 		}
// 		#nav-list {
// 			width: 100%;
// 			justify-content: space-around;
// 			padding-right: 0;
// 			flex-wrap: wrap;
// 		}
// 	}
// `;

// export const Profile = styled.div`
// 	display: flex;
// 	justify-content: space-between;
// 	flex-wrap: row;
// 	flex-wrap: nowrap;
// 	align-items: center;

// 	.img {
// 		width: 40px;
// 		height: 40px;
// 		border-radius: 50%;
// 		margin-left: 10px;
// 		overflow: hidden;
// 		background-color: #ffffff;

// 		img {
// 			width: 100%;
// 			margin: auto;
// 		}
// 	}
// `;
