import styled from 'styled-components';
import NoiseBg from '../../images/noise-bg.png';
import HomeBg0 from '../../images/home-bg-0.png';
import HomeBg1 from '../../images/home-bg-1.png';
import HomeBg2 from '../../images/home-bg-2.png';
import HomeBg3 from '../../images/home-bg-3.png';


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
	display: grid;
	place-items: center;
	width: calc(100vw - 40px);
	height: calc(100vh - 90px);
	padding: 0 20px;

	&.bg0 { background-image: url(${HomeBg0}); }
	&.bg1 { background-image: url(${HomeBg1}); }
	&.bg2 { background-image: url(${HomeBg2}); }
	&.bg3 { background-image: url(${HomeBg3}); }
`

export const Content = styled.div `
	display: grid;
	width: calc(80% - 0px);
	height: auto;
	grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
	grid-gap: 2rem;
	padding: 0 20px;
	transition: all 0.3s ease;

	a.block {
		display: block;
		width: 100%;
		height: 420px;
		border-radius: 5px;
		margin: 1rem 0;
		background-color: #fff;
		-webkit-box-shadow: 0px 0px 41px -17px rgba(0,0,0,0.75);
		-moz-box-shadow: 0px 0px 41px -17px rgba(0,0,0,0.75);
		box-shadow: 0px 0px 41px -17px rgba(0,0,0,0.75);
		transition: all 0.3s ease;
		overflow: hidden;
		cursor: pointer;
		text-decoration: none;
		color: #333;

		.img-container {
			width: calc(100% - 20px);
			height: 45%;
			margin: 10px;
			border-radius: 5px;
			overflow: hidden;
			background-position: center;
			background-size: cover;
			transition: all 0.3s ease;

			&.invision { background-image: url('https://images.unsplash.com/photo-1517982904537-aa60aa9789b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'); }
			&.bmd-os { background-image: url('https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60');}
			&.team { background-image: url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'); }
			&.blog { background-image: url('https://images.unsplash.com/photo-1485498128961-422168ba5f87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'); }

		}

		h3 {
			margin: 10px 20px;
			font-size: 25px;
			transition: all 0.3s ease;
		}

		p {
			font-weight: 100;
			margin: 10px 20px;
			line-height: 1.5em;
			transition: all 0.3s ease;
		}

		&:hover {
			/* transform: translate(0, -15px); */
			transform: translateX(10px) rotate(0) translateY(5px);

			.img-container {
				transform: translateX(0) rotate(0) translateY(10px);
			}

			h3, p {
				transform: translateX(5px) rotate(0) translateY(15px);
			}
		}
	}
`
