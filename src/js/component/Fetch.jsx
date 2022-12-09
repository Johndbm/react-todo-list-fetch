import React from "react";

function fetchTodos(){
    console.log("Load the Tasks");
    fetch("https://assets.breatheco.de/apis/fake/todos/user"/john)
    .then((response) => {
        if(response.ok){
            console.log("Tasks Loaded!");
        }else {
            console.log("Error happened...")
        }
    });
}



export default Fetch;