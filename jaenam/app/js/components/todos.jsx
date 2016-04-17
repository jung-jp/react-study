const
React = require('react'),
Todo = require('./todo'),

/*generateUniqueId = () => {
    let d = new Date().getTime();
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
},*/

generateUniqueId = _ => new Date().getTime(),

Todos = React.createClass({
	getInitialState(){
		return {
			todos: [
				{id: 0, text: 'advent calendar0'},
				{id: 1, text: 'advent calendar1'},
				{id: 2, text: 'advent calendar2'}
			]
		};
	},
	deleteTodo(id){
		const deletedTodos = this.state.todos.filter(todo => todo.id !== id);
		this.setState({
			todos: deletedTodos
		});
	},
	addChild(){
		const todos = this.state.todos;
		const newId = generateUniqueId();
		const newTodo = {
			id: newId,
			text: 'advent calendar ' + newId
		};
		todos.push(newTodo);
		this.setState({
			todos: todos
		});
	},
	render(){
		const todos = this.state.todos.map(todo => (
			<li key={todo.id}>
				<Todo onDelete={this.deleteTodo} todo={todo} />
			</li>
		));
		return (
			<div>
				<ul>
					{todos}
				</ul>
				<button onClick={this.addChild}>추가</button>
			</div>
		);
	}
});

module.exports = Todos;