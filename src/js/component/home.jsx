import React, {useState} from "react";
// import Todos from "../view/Todos.jsx";
import Fetch from "./Fetch.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";



//create your first component
const Home = () => {

	const [task, setTask] = useState(
		{
		label:"", 
		done: false,
		}
	);

	const [allTask, setAllTask] = useState([
		{
			label: "Comprar Pan",
			done: false,
		},
		{
			label: "Comprar Verduras",
			done: false,
		},
		{
			label: "Comprar Perrarina",
			done: false,
		},
	]);

	const handleTask = (event) => {
		
		setTask({
			...task,
			[event.target.name]: event.target.value
		})
		

	};

	const addTask = (event) => {
		
		if (event.key == "Enter") {
			setAllTask([
				task, ...allTask
			])
		}
	} 

	const delTask = (id) => {
		console.log(id)
		const filterTask = allTask.filter((item, index) => index != id)
		console.log(filterTask)
		setAllTask(
			filterTask
		)

	}

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