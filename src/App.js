import React from "react";
import logo from "./AP_logo.svg";
import "./App.css";

class App extends React.Component {
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
						/>
						<button className="btn-add">Add TODO</button>
					</div>
					<div className="list">
						<ul>
							<li>
								<input type="checkbox" className="input-chkbox" />
								<p className="li-p">Practice React for 1 hour</p>
								<button className="btn-del">Delete</button>
							</li>
						</ul>
					</div>
				</div>
			</section>
		);
	}
}

export default App;
