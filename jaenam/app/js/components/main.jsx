const
React = require('react'),
Counter = require('./counter'),
Avatar = require('./avatar'),
Users = require('./users'),
Todos = require('./todos'),
Test = require('./test'),
FindChildren = require('./findChildren'),

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
		        <FindChildren><span>xxx</span><p>yyy</p></FindChildren>
		        <FindChildren>zzzz</FindChildren>
		    </div>
		);
	}
});

module.exports = Main;