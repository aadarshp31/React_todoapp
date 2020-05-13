import React from "react";
import logo from "./AP_logo.svg";
import "./App.css";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newItem: "",
			list: [{id: 1589406348554, value: "Practice React for 1 hour", isDone: false}]
		};
	}

	//Creating an item in Todo list
	addItem(todoValue) {
		if (todoValue !== "") {
			const newItem = {
				id: Date.now(),
				value: todoValue,
				isDone: false
			};

			//Getting list array from the object
			const list = [...this.state.list];
			list.push(newItem);
			//Setting state of the list array
			this.setState({
				newItem: "",
				list
			});
		}
	}

	//Deleting an item in Todo list
	deleteItem(id) {
		//Getting list array from the object
		var list = [...this.state.list];
		//Skipping the item with the id given as an argument
		const updatedList = list.filter(item => item.id !== id);
		//Setting state of the list array
		this.setState({list: updatedList});
	}

	//Update value of this.state.newItem according to the input(string)
	updateInput(input){
		this.setState({newItem: input})
	}

	render() {
		return (
			<section className="main-component">
				<img
					src={logo}
					className="logo"
					height="100"
					width="100"
					alt="Creator's logo"
				/>
				<h1 className="app-title">React ToDo App</h1>
				<div className="container">
					Add an item...
					<br />
					<div className="add-todo-container">
						<input 
							type="text"
							className="input-text"
							placeholder="Write a TODO"
							required
							value = {this.state.newItem}
							onChange = {event => this.updateInput(event.target.value)}
						/>
						<button 
						className="btn-add"
						onClick = {() => this.addItem(this.state.newItem)}
						disabled = {!this.state.newItem.length}
						>Add TODO</button>
					</div>
					<div className="list">
						<ul>

							{this.state.list.map(item => {
								return(
									<li key={item.id}>
										<input 
										type="checkbox"
										name="isDone"
										className="input-chkbox"
										//TODO: Implement a function tochange isDone flag in item
										onChange={() => {}} 
										/>
										<p className="li-p">{item.value}</p>
										<button className="btn-del" onClick={() => this.deleteItem(item.id)}>Delete</button>
									</li>
									);
								})
							}

						</ul>
					</div>
				</div>
			</section>
		);
	}
}

export default App;
