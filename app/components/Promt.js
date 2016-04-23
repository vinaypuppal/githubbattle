var React = require('react');
var transparentBg = require('../styles/').transparentBg;

var Promt = function(props){
	return (
			<div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
				<h1>{props.header}</h1>
				<form onSubmit={props.onSubmitUser}>
					<div className='form-group'>
						<input
							className="form-control"
							type="text"
							placeholder="Github username"
							onChange={props.onUpdateUser}
							value={props.username} />
					</div>
					<div className="form-group col-sm-4 col-sm-offset-4">
						<button className="btn btn-block btn-success" type="submit">Continue</button>
					</div>
				</form>
			</div>
		)
};

Promt.propTypes={
	header:React.PropTypes.string.isRequired,
	username:React.PropTypes.string.isRequired,
	onUpdateUser:React.PropTypes.func.isRequired,
	onSubmitUser:React.PropTypes.func.isRequired
};

module.exports = Promt
