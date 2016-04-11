const React = require('react');

const Avatar = React.createClass({
	propTypes: {
		user: React.PropTypes.shape({
			name:  React.PropTypes.string.isRequired,
			id:    React.PropTypes.number.isRequired,
			width: React.PropTypes.number.isRequired,
			height:React.PropTypes.number.isRequired,
			alt:   React.PropTypes.string
		})
	},
	render(){
		const {
			id,
			name,
			width,
			height,
			alt
		} = this.props.user;
		const avatarImg = `/img/avatar_${id}.png`;
		return (
			<div>
				<span>{name}</span>
				<img src={avatarImg} width={width} height={height} alt={alt} />
			</div>
		);
	}
});

module.exports = Avatar;
// <Avatar user={user} />