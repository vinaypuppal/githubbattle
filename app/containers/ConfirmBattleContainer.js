var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../helpers/githubHelpers');
var ConfirmBattleContainer=React.createClass({
	getInitialState:function(){
		return{
			isLoading:true,
			playerInfo:[]
		}
	},
	componentDidMount:function(){
		var query = this.props.location.query;
		console.log("Query",query);
		//send ajax request
		githubHelpers.getPlayerInfo([query.playerOne,query.playerTwo])
			.then(function(players){
				this.setState({
					isLoading:false,
					playerInfo:players
				})
			}.bind(this));
	},
	render: function() {
		return (
			<ConfirmBattle
			isLoading={this.state.isLoading}
			playerInfo={this.state.playerInfo} />
		);
	}
});

module.exports = ConfirmBattleContainer;
