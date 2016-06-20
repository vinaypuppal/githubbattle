const React = require('react');

const Main = React.createClass({
	render:function(){
		return(
				<div>
				{this.props.children}
				</div>
			);
	}
});

module.exports = Main;
