const
React = require('react'),

printChildren = function(_children){
	if(typeof _children !== 'object'){
		console.log('text : ' + _children);
		console.log('finished');
		return;
	}
	for(const child of _children){
		console.log('<' + child.type + '>');
		printChildren(child.props.children);
	}
},
Component = React.createClass({
	componentDidMount(){
		printChildren(this.props.children);
	},
	render(){
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
});

module.exports = Component;