const React = require('react');
const Counter = React.createClass({
	propTypes: {
		initialCount: React.PropTypes.number
	},
	getDefaultProps(){
		return { initialCount: 0 };
	},
	getInitialState(){
		return { count: this.props.count };
	},
	onClick(){
		this.setState({ count: this.state.count + 1 });
	},
	render(){
		return(
			<div>
				<span>{this.state.count}</span>
				<button onClick={this.onClick}>click!</button>
			</div>
		);
	}
});

module.exports = Counter;