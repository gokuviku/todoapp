"use client";
import { useState } from "react";

function page() {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [maintask, setmaintask] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    console.log("Task added:", { title, desc });
    // Clear the input fields after submission
    setmaintask([...maintask, { title, desc }]);
    setTitle("");
    setDesc("");
    console.log(maintask)
  };
  const deleteHandler =(i)=>{
    let copytask = [...maintask]
    copytask.splice(i,1)
    setmaintask(copytask)
  }
  let rendertask = <h2 className="text-black font-bold capitalize">no task avaialbe</h2>

  if (maintask.length > 0) {
    rendertask = maintask.map((t, i) => {
      return (<li key={i} className="flex items-center justify-between mb-8" > <div className="flex items-center justify-between mb-5 w-2/3">
        <h5 className="text-2xl font-bold" >{t.title}</h5>
        <h6 className="text-lg font-medium" >{t.desc}</h6>
      </div>
        <button onClick={() => deleteHandler(i)} className="bg-red-400 text-white px-4 py-2 text-2xl font-bold rounded">Delete</button>
      </li>)
    })
  }
  return (
    <>
      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">MyToDoList</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="enter task here" className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2" value={title} onChange={(e) => {
          setTitle(e.target.value)
        }} />

        <input type="text" placeholder="enter description here" className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2" value={desc} onChange={(e) => {
          setDesc(e.target.value)
        }} />

        <button className="bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5" type="submit">Add Task: </button>

      </form>
      <hr />
      <div className="p-8 bg-slate-200">
        <ul>{rendertask}</ul>
      </div>
    </>
  )
}

export default page