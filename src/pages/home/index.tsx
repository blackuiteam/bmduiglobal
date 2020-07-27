import React, { useEffect } from 'react';
import { Link, Route, Switch } 	from 'react-router-dom';

import GlobalStyle from '../styles/global';
import { Header, Wrapper, Content } from '../app/styles';

const Home: React.FC = () => {

	const myBg = Math.floor(Math.random() * 4);

	function randomBg() {
		return myBg;
	}

	useEffect(() => {
		randomBg();
	}, []);

	const HomeBoxes = [
		{
			to: '/invision',
			cssClass: 'invision',
			title: 'Invision',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate sunt vitae quisquam. Iusto magni impedit nihil itaque, qui tenetur? autem illum in itaque distinctio.'
		},
		{
			to: '/bmdos',
			cssClass: 'bmd-os',
			title: 'Bmd OS',
			content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae magni voluptatem, explicabo ducimus odit minima voluptates possimus. Earum quibusdam dolor saepe?'
		},
		{
			to: '/ourteam',
			cssClass: 'team',
			title: 'Our Team',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, esse quia. Facere dolores, molestias qui quam dolore reiciendis asperiores at. Et totam a veniam vel.'
		},
		{
			to: '/blog',
			cssClass: 'blog',
			title: 'Blog',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, tempora eius modi doloremque at optio aspernatur iusto qui! Possimus ducimus facere numquam eos enim veritatis!'
		},
	]

	return (
		<>
			<GlobalStyle />

			{/* HEADER */}
			<Header>
				<h4>BMD UI GLOBAL</h4>
			</Header>


	  		{/* WRAPPER */}
			<Wrapper className={'bg' + `${myBg}`}>

				{/* CONTENT */}
				<Content>
					{HomeBoxes.map((box, i)=> (
						<Link className="block" to={box.to}>
							<div className={"img-container " + `${box.cssClass}`} />
							<h3>{box.title}</h3>
							<p>{box.content}</p>
						</Link>
					))}
				</Content>
			</Wrapper>
		</>
	)
}

export default Home;
