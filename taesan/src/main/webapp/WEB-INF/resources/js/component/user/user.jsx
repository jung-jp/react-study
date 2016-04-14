
const React = require('react'),

    User = React.createClass({
        propTypes: {
            name: React.PropTypes.string.isRequired,
            id:   React.PropTypes.number.isRequired
        },

        render() {
            return (
                <div>{this.props.id}:{this.props.name}</div>
            );
        }
    });

module.exports = User;
