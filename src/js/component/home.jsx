import React, {useState, useEffect} from "react";
// import Todos from "../view/Todos.jsx";
// import Fetc from "./Fetch.jsx";

//include images into your bundle

const urlBase = "https://assets.breatheco.de/apis/fake/todos/user/john"


//create your first component
const Home = () => {

	const [task, setTask] = useState(
		{
		label:"", 
		done: false,
		}
	);

	const [allTask, setAllTask] = useState([]);

	const handleTask = (event) => {
		
		setTask({
			...task,
			[event.target.name]: event.target.value
		})
		

	};

	const addTask = async (event) => {
		
		if (event.key == "Enter") {
			const newTasks = [
				task, ...allTask
			]
			const response = await fetch(urlBase, {
				method: 'PUT',
				body: JSON.stringify(newTasks),
				headers: {
					"Content-Type": "application/json",
				  },
			})
			console.log(newTasks)
			if (response.ok){
				fetchTodos()
			}
		}
	} 

	const delTask = async (id) => {
		console.log(id)
		const filterTask = allTask.filter((item, index) => index != id)
		const response = await fetch(urlBase, {
			method: 'PUT',
			body: JSON.stringify(filterTask),
			headers: {
				"Content-Type": "application/json",
			  },
		})
		if (response.ok){
			fetchTodos()
		}

	}

	async function fetchTodos(){
		console.log("Load the Tasks");
		const response = await fetch(urlBase)
		console.log(response)
		if (response.ok){
			const data = await response.json()
			console.log(data)
			setAllTask(data)
		}
		
	}

	useEffect( () => {
		fetchTodos()
	},[])

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="display-1 text-center">"To-Do list"</div>
				<div className="">
					<input 
							className="form-control" 
							type="text" 
							value={task.label}
							name="label"
							placeholder="What needs to be done? (Type-in a task)" 
							onKeyDown={addTask} 
							onChange={handleTask}
						/>
					<ul className="list-group list-group-flush">
						{allTask.map( (item, index) =>
						(
							<li 
								className="list-group-item" 
								onClick={()=> delTask(index)}>
									{item.label}
							</li>
						))}
						
					</ul>
					<div className="card-footer fw-lighter fst-italic text-secondary">
						"{allTask.length}" task(s) left to-do
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;