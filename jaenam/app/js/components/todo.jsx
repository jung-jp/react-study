const
React = require('react'),

Todo = React.createClass({
	propTypes: {
		todo: React.PropTypes.shape({
			id:   React.PropTypes.number.isRequired,
			text: React.PropTypes.string.isRequired
		}),
		onDelete: React.PropTypes.func.isRequired
	},
	_onDelete(){
		this.props.onDelete(this.props.todo.id);
	},
	render(){
		return (
			<div>
				<span>{this.props.todo.text}</span>
				<button onClick={this._onDelete}>delete</button>
			</div>
		);
	}
});

module.exports = Todo;