const
    React = require('react'),
    Users = require('../user/users'),
    user = {
        id: 10,
        name: 'Hoge'
    };


Main = React.createClass({
    render() {

        return (
            <div>
                <Users />
            </div>
        );
    }
});

module.exports = Main;