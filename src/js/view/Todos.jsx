import React {useState} from "react";

const Todos = () => {
    const [task, setTask] = useState({
		label: "", 
		done: false,
	});

	const addTask = (event) => {
		console.log(event.key)
		if (event.key == "Enter") {
			
		}
	} 

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="display-1 text-center">"To-Do list"</div>
				<div className="">
					<input className="form-control" type="text" placeholder="Type-in a task" onKeyDown={addTask}/>
					<p></p>
				</div>
			</div>
		</div>
	);
};

export default Todos;