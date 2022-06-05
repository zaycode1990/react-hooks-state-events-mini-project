import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [allTasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")

  function handleAddTask(newTask) {
    console.log(newTask)
    console.log(allTasks)
    setTasks([...allTasks, newTask])
    console.log(allTasks)
  }

function handleDeleteTask(deletedTaskText){
  setTasks(allTasks.filter((task) => task.text !== deletedTaskText))
}

const visibleTasks = allTasks.filter(
  (task) => category === "All" || task.category === category
)


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} onSelectCategory={setCategory}/>
      <NewTaskForm 
      categories={CATEGORIES.filter((cat)=>cat !== "All")}
      onTaskFormSubmit={handleAddTask}
    />
      <TaskList onDeleteTask={handleDeleteTask} tasks={visibleTasks}/>
    </div>
  );
}

export default App;
