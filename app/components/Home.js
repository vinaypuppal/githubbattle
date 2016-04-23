var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var transparentBg = require('../styles/').transparentBg;

var Home = React.createClass({
	render:function(){
		return(
				<div className='jumbotron col-sm-6 col-sm-offset-3 text-center' style={transparentBg}>
					<h1>Github Battle</h1>
					<p>some motto titlt</p>
					<div className='col-sm-4 col-sm-offset-4'>
					<Link to='/playerOne'>
						<button className='btn btn-success btn-block'>Get Started</button>
					</Link>
					</div>
				</div>
			);
	}
});

module.exports = Home;
