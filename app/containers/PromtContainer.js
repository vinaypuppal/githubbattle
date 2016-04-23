var React = require('react');
var Promt = require('../components/Promt');

var PromtContainer = React.createClass({
	contextTypes:{
		router:React.PropTypes.object.isRequired
	},
	getInitialState:function(){
		return {
			username:''
		}
	},
	handleUpdateUser:function(e){
		this.setState({
			username:e.target.value
		});
	},
	handleSubmitUser:function(e){
		e.preventDefault();
		var username=this.state.username;
		this.setState({
			username:''
		});
		if(this.props.routeParams.playerOne){
			//goto /battle
			this.context.router.push({
				pathname:'/battle',
				query:{
					playerOne:this.props.routeParams.playerOne,
					playerTwo:username
				}
			});
		}else{
			//goto /playerTwo
			this.context.router.push('/playerTwo/'+username);
		}
	},
	render:function(){
		return(
				<Promt
					header={this.props.route.header}
					username={this.state.username}
					onUpdateUser={this.handleUpdateUser}
					onSubmitUser={this.handleSubmitUser}/>
			);
	}
});

module.exports = PromtContainer;
