import React from 'react';

export default class TodoSearch extends React.Component {
	render() {
		return (
			<form onSubmit={this.handleSearch.bind(this)}>
				<input type='text' placeholder='Keyword' ref='searchInput' />
				<button>Search</button>
			</form>
		);
	}
	handleSearch(e) {
		e.preventDefault();
		
		this.props.searchTask(this.refs.searchInput.value.trim());
	}
}