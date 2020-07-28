import styled from 'styled-components';
import NoiseBg from '../../images/noise-bg.png';
import HomeBg0 from '../../images/home-bg-0.png';
import HomeBg1 from '../../images/home-bg-1.png';
import HomeBg2 from '../../images/home-bg-2.png';
import HomeBg3 from '../../images/home-bg-3.png';
import InvisionBg from '../../images/fast.svg';
import BmdOsBg from '../../images/discoverable.svg';
import TeamBg from '../../images/accessible.svg';
import BlogBg from '../../images/lighthouse-accessibility.svg';
import KitchenBg from '../../images/cooking.svg';


export const Header = styled.div `
	display: grid;
	align-items: center;
	width: 100%;
	height: 90px;
	font-size: 35px;
	color: #fff;
	border-bottom: 1px solid #000;
	background-image: url(${NoiseBg});

	h4 {
		padding: 0 0 0 11%;
	}
`

export const Wrapper = styled.div `
	position: relative;
	display: grid;
	place-items: center;
	width: calc(100vw - 40px);
	height: calc(100vh - 90px);
	padding: 0 20px;

	&:before {
		content: "";
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-color: #000;
		opacity: .7;
		z-index: 0;
	}


	&.bg0 { background-image: url(${HomeBg0});  }
	&.bg1 { background-image: url(${HomeBg1}); }
	&.bg2 { background-image: url(${HomeBg2}); }
	&.bg3 { background-image: url(${HomeBg3}); }
`

export const Content = styled.div `
	/* width: calc(80% - 0px); */
	/* grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); */
	/* padding: 0 20px; */
	display: grid;
	height: auto;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 1rem;
	transition: all 0.3s ease;
	z-index: 1;

	a.block {
		/* margin: 1rem 0; */
		/* -webkit-box-shadow: 0px 0px 41px -17px rgba(0,0,0,0.75);
		-moz-box-shadow: 0px 0px 41px -17px rgba(0,0,0,0.75);
		box-shadow: 0px 0px 41px -17px rgba(0,0,0,0.75); */
		display: block;
		width: 400px;
		height: 369px;
		border-radius: 8px;
		background-color: #fff;
		transition: all 0.3s ease;
		overflow: hidden;
		cursor: pointer;
		text-decoration: none;
		color: #333;
		padding: 32px;

		.img-container {
			/* width: calc(100% - 20px); */
			/* height: 45%; */
			/* border-radius: 5px; */
			width: 374px;
			height: 206px;
			margin: 10px;
			background-color: #f8f9fa;
    		border: 1px solid #dadce0;
			overflow: hidden;
			background-repeat: no-repeat;
			background-position: center;
			background-size: cover;
			transition: all 0.3s ease;

			/*
			&.invision { background-image: url('https://images.unsplash.com/photo-1517982904537-aa60aa9789b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'); }
			&.bmd-os { background-image: url('https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60');}
			&.team { background-image: url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'); }
			&.blog { background-image: url('https://images.unsplash.com/photo-1485498128961-422168ba5f87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'); }
			*/

			&.invision { background-image: url(${InvisionBg}); }
			&.bmd-os { background-image: url(${BmdOsBg}); }
			&.team { background-image: url(${TeamBg}); }
			&.blog { background-image: url(${BlogBg}); }
			&.kitchen { background-image: url(${KitchenBg}); background-size: contain; }

		}

		h3 {
			/* font-size: 25px; */
			margin: 10px 20px;
			font-weight: 400;
			font-size: 20px;
			transition: all 0.3s ease;
		}

		p {
			font-weight: 300;
			font-size: 14px;
			margin: 10px 20px;
			line-height: 1.5em;
			transition: all 0.3s ease;
		}

		&:hover {
			/* transform: translate(0, -15px); */
			/* transform: translateX(10px) rotate(0) translateY(5px); */
			/* transition: box-shadow .2s, -webkit-box-shadow .2s; */
			-webkit-box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
			box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);

			.img-container {
				transform: translateX(0) rotate(0) translateY(10px);
			}

			h3, p {
				transform: translateX(0) rotate(0) translateY(15px);
			}
		}
	}
`
