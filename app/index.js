var React = require('react');
var ReactDom = require('react-dom');

var USER_DATA = {
	name: 'VinayPuppal',
	username:'vinaypuppal',
	img:'https://avatars3.githubusercontent.com/u/8843216?v=3&s=460'
};

var ProfilePic = React.createClass({
	render:function(){
		return(
			<img src={this.props.imageUrl} alt="profile_image" style={{height:100,width: 100}} />
		);
	}
});

var ProfileLink = React.createClass({
	render:function(){
		return(
			<div>
				<a href={"https://github.com/"+this.props.username}>{this.props.username}</a>
			</div>
		);
	}
});


var ProfileName = React.createClass({
	render:function(){
		return(
			<div>
				{this.props.name}
			</div>
		);
	}
});

var Avatar = React.createClass({
	render:function(){
		return (
				<div>
					<ProfilePic imageUrl={this.props.user.img} />
					<ProfileLink username={this.props.user.username} />
					<ProfileName name={this.props.user.name} />
				</div>
			);
	}
});

ReactDom.render(
	<Avatar  user={USER_DATA} />,
	document.getElementById('app')
	);
