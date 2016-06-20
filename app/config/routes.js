var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Main = require('../components/Main');
var Home = require('../components/Home');
var PromtContainer = require('../containers/PromtContainer');
var ConfirmBattleContainer = require('../containers/ConfirmBattleContainer');
var routes= (
				<Router history={hashHistory}>
					<Route path='/' component={Main} >
						<IndexRoute component={Home} />
						<Route path='/playerOne' header='PlayerOne' component={PromtContainer} />
						<Route path='/playerTwo/:playerOne' header='PlayerTwo' component={PromtContainer} />
						<Route path='/battle' component={ConfirmBattleContainer} />
					</Route>
				</Router>
			);

module.exports = routes;
