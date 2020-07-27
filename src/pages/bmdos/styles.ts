import styled from 'styled-components';

export const Header = styled.div `
	display: grid;
	align-items: center;
	width: 100%;
	height: 300px;
	color: #fff;
	background-color: #222;
	border-bottom: 1px solid #000;
	background-image: url('https://images.unsplash.com/photo-1559325280-e31138f59e10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=4178&q=80');
	background-position: center;
	background-size: cover;

	div {
		padding: 0 0 0 11%;

		a { color: #fff; }
	}
`

export const Container = styled.div `
	display: grid;
	grid-template-columns: 20% 80%;
	grid-template-rows: auto;
	width: 80%;
	margin: 10px auto;
`

export const SideMenu = styled.ul `
	list-style: none;
	padding: 0;
	box-sizing: border;

	li {
		font-size: 15px;
		padding: 15px 10px;
		transition: 0.2s ease;
		cursor: default;

		&:hover {
			background-color: #999;
		}

		&.active {
			font-weight: 600;
		}
	}
`

export const ImageContainer = styled.div `
	display: block;
	width: 100%;
	height: auto;
`
