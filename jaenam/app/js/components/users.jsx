const
React = require('react'),
superagent = require('superagent'),
superagentJsonApify = require('superagent-jsonapify'),
User = require('./user');

superagentJsonApify(superagent);

const Users = React.createClass({
	getInitialState(){
		return {
			users: [
				{id: 1, name: 'foo'},
				{id: 2, name: 'bar'}
			]
		};
	},
	componentDidMount(){
		superagent.get('js/components/users.json')
		.then(res => {
			this.setState({
				users: this.state.users.concat(res.body)
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