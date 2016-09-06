import _ from 'lodash';
import React from 'react';
import TodoListHeader from './todo-list-header';
import ToDoListItem from './todo-list-item';

export default class TodoList extends React.Component {
	renderItems() {
        const props = _.omit(this.props, 'toDo');
        
		return _.map(this.props.toDo, (todo, index) => <ToDoListItem key={index} {...todo} {...props} />);
	}
	render() {
		return (
			<table>
				<TodoListHeader />
				<tbody>
					{this.renderItems()}
				</tbody>
			</table>
		);
	}
}