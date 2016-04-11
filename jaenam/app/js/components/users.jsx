const React = require('react'),
	$ = require('jquery'),
	User = require('./user'),

Users = React.createClass({
	getInitialState(){
		return {
			users: [
				{id: 1, name: 'foo'},
				{id: 2, name: 'bar'}
			]
		};
	},
	componentDidMount(){
		$.getJSON('js/components/users.json', (data) => {
			this.setState({
				users: this.state.users.concat(data)
			});
		});
	},
	render(){
		const users = this.state.users.map((user)=> (<User id={user.id} name={user.name} key={user.id} />));
		return (
			<div>
				<p>사용자 목록</p>
				{users}
			</div>
		);
	}
});

module.exports = Users;