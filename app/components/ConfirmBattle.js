var React = require('react');

var puke = function(object){
	return <pre>{JSON.stringify(object,null,' ')}</pre>
}

var ConfirmBattle= function(props) {
		return props.isLoading === true
			? <p>Loading....</p>
			: <div>Confirm Battle
					{puke(props)}
			</div>
	};

ConfirmBattle.propTypes={
	isLoading:React.PropTypes.bool.isRequired
	playerInfo:React.PropTypes.array.isRequired
}

module.exports = ConfirmBattle;
