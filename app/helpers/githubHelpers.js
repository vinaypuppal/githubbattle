var axios = require('axios');

var getUserInfo=function  (username) {
	return axios.get('https://api.github.com/users/'+username);
};

var helpers={
	getPlayerInfo:function(players){
			return axios.all(players.map(function(player){
				return getUserInfo(player);
			}))
			.then(function(response){
				return response.map(function(item){
					return item.data;
				});
			})
			.catch(function(error){
				console.warn("Erron in getting player Info: ",error);
			});
	}
};

module.exports = helpers;
