import { useState } from 'react'
export const DashBoard = () => {
    const[inputValue,setInputValue]=useState("");
    const[task,setTask]=useState([]);

  const handleInputChange=(value)=>{
    setInputValue(value);
    console.log("input value:",inputValue);
    
  }
  const handleFormSubmit=(event)=>{
    event.preventDefault();
if(!inputValue)return;
 setTask((prevTask)=>[...prevTask,inputValue]); 
 setInputValue("");}
  return (
    <section className="Container border-2 border-red-500">
    <div className="container">   
        <h1>hey iam DashBoard</h1>
        <div className="add-habit">
            <form onSubmit={handleFormSubmit}>
            <div>
                <label htmlFor="">Add your Habit:
                </label>
                <input type="text" className="border bg-white text-gray-600 !p-2 rounded-xl" placeholder="habit name"  value={inputValue} onChange={(event)=>handleInputChange(event.target.value)}/>
                <button type='submit' className="bg-violet-700 text-white rounded-xl !p-2 font-bold font-sans hover:bg-green-800 hover:cursor-pointer" >Add Habit</button>
            </div>
            </form>
        </div>
      </div>
    </section>
  )
}