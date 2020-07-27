import React from 'react';
import classNames from 'classnames';
import { Switch, Route, Link } from 'react-router-dom';

import GlobalStyle 	from '../styles/global';
import { Header } 	from './styles';

// PAGES
import Home 	from '../home';
import Invision from '../invision';
import BmdOs 	from '../bmdos';
import OurTeam 	from '../ourteam';
import Blog 	from '../blog';

const App: React.FC = () => {
	const AppRoutes = [
		{
			path: '/',
			component: Home,
		},
		{
			path: '/invision',
			component: Invision,
		},
		{
			path: '/bmdos',
			component: BmdOs,
		},
		{
			path: '/ourteam',
			component: OurTeam,
		},
		{
			path: '/blog',
			component: Blog,
		}
	]
	return (
		<>
			<GlobalStyle />

			<Switch>
				{AppRoutes.map((route, i) => (
					<Route key={i} component={route.component} exact path={route.path}></Route>
				))}
			</Switch>
		</>
	)
}

export default App;
