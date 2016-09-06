import React from 'react';
import TodoCreate from './todo-create';
import TodoSearch from './todo-search';
import TodoList from './todo-list';

const toDo = [
	{
		task: 'make React tutorial',
		isCompleted: false
	},
	{
		task: 'go to school',
		isCompleted: true
	},
	{
		task: 'meet with friends',
		isCompleted: false
	},
	{
		task: 'say hello',
		isCompleted: false
	},
	{
		task: 'run business',
		isCompleted: true
	},
	{
		task: 'eat dinner',
		isCompleted: true
	}
];

export default class App extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			toDo,
            reservedTodo: toDo
		};
	}
	render() {
		return (
			<div>
				<h1>React ToDo App</h1>
				<TodoCreate toDo={this.state.toDo} createTask={this.createTask.bind(this)} />
				<TodoSearch toDo={this.state.toDo} searchTask={this.searchTask.bind(this)} />
				<TodoList toDo={this.state.toDo} toggleTask={this.toggleTask.bind(this)} saveTask={this.saveTask.bind(this)} deleteTask={this.deleteTask.bind(this)} />
			</div>
		);
	}
    deleteTask(taskToDelete) {
        _.remove(this.state.toDo, todo => todo.task === taskToDelete);
        this.setState({ toDo: this.state.toDo });
    }
    saveTask(oldTask, newTask) {
        const foundTodo = _.find(this.state.toDo, todo => todo.task === oldTask);
        foundTodo.task = newTask;
        this.setState({ toDo: this.state.toDo });
    }
    toggleTask(task) {
        const foundTodo = _.find(this.state.toDo, todo => todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        
        this.setState({ toDo: this.state.toDo });
    }
	createTask(task) {
		this.state.toDo.push({
			task,
			isCompleted: false
		});
		this.setState({ toDo: this.state.toDo });
	}
	searchTask(task) {
		const foundTodo = _.find(this.state.toDo, todo => todo.task.toLowerCase().indexOf(task.toLowerCase()) >= 0);
        
        if (task) {
            this.state.reservedTodo.push(this.state.toDo);
            this.state.toDo = [];
            this.state.toDo.push(foundTodo);
        }
        else {
            this.state.toDo.push(this.state.reservedTodo);
        }
        
        this.setState({ toDo: this.state.toDo });
	}
}