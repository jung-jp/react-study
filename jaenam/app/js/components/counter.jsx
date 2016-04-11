const React = require('react');
const Counter = React.createClass({
	getInitialState(){
		return {
			count: 0,
			count2: 0
		};
	},
	onClick(){
		this.setState({
			count: this.state.count + 1,
			count2: this.state.count + 2
		});
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