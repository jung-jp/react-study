const
React = require('react'),
Counter = require('./counter'),
Avatar = require('./avatar'),
Users = require('./users'),

user = {
	id: 10,
	name: "Hoge",
	width: 100,
	height: 100,
	alt: '알트값'
},

Main = React.createClass({

	render(){
		return (
		    <div>
			    <Users />
		    </div>
		);
	}
});

module.exports = Main;