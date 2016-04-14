const
    $ = require('jquery'),
    React = require('react'),
    User = require('./user'),
    Users = React.createClass({
        getInitialState() {
            return {
                users: [ {id: 1, name: "foo"}, {id: 2, name: "bar"} ]
            }
        },
        componentDidMount() {

            console.log('ddd');
            $.getJSON('js/components/data.json', (data) => {
                this.setState({
                    users: this.state.users.concat(data)
                });
            });
        },

        render() {
            var users = this.state.users.map((user) => {
                return <User id={user.id} name={user.name} key={user.id}/>
            });

            {
                console.log(users);
            }

            return (
                <div>
                    <p>사용자 목록</p>
                    {users}
                </div>
            );
        }
    });

module.exports = Users;