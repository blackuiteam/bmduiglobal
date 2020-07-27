// You want to import the Router, Route, IndexRoute and Link from React Router.
const {Router, Route, IndexRoute, Link} = ReactRouter;

// A main React component using this.props.children will pull in all the children Routes in the router function at the bottom.
const App = React.createClass({
   render: function() {
     return(
       <div>
          {this.props.children}
        </div>
     );
   }
});

const Home = React.createClass({
   render: function() {
     return(
      <div>
         <h1>Home Page</h1>
         <ul>
           <li><Link to="link-one">Link 1</Link></li>
           <li><Link to="link-two">Link 2</Link></li>
         </ul>
      </div>
     );
   }
});

const LinkOne = React.createClass({
  render: function() {
    return(
      <div>
         <h1>Link 1 Page</h1>
         <Link to="/">Back Home</Link>
      </div>
    );
  }
});

const LinkTwo = React.createClass({
  render: function() {
    return(
      <div>
         <h1>Link 2 Page</h1>
        <Link to="/">Back Home</Link>
      </div>
    );
  }
});

// Set a "home" route of "/" to work with the main "App" component, then use IndexRoute with the "Home' component to set it as the initial component rendered.
ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="link-one" component={LinkOne} />
      <Route path="link-two" component={LinkTwo} />
    </Route>
  </Router>
), document.getElementById('root-entry'));
