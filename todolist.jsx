import React, {useState} from "react"
function Todoapp(){
    const [add,addList]=useState([])
    const [text,addText]=useState("")
    const handleAdd=()=>{
        if(text.trim()!==""){
        addList(a=>[...a,text])
        addText("")}
    }
    const handleText=(e)=>{
        addText(e.target.value)
    }
    const removeTask=(index)=>{
        addList(add.filter((_,i)=> i!=index))
    }
    const moveup=(index)=>{
        const updatetask=[...add]
        if(index>0){
            [updatetask[index],updatetask[index-1]]=[updatetask[index-1],updatetask[index]]
            addList(updatetask)
        }
    }
    const movedown=(index)=>{
        const updatetask=[...add]
        if(index<add.length-1){
            [updatetask[index],updatetask[index+1]]=[updatetask[index+1],updatetask[index]]
            addList(updatetask)
        }
    }
    return(
        <div className="container">
        <div className="todolist">
        <h1>To-Do-List</h1>
        <input type="text" value={text} onChange={handleText} placeholder="Enter the Task......"/><button onClick={handleAdd} className="Addbtn">ADD</button>
        <ol>
        {add.map((add,index)=>
                <li key={index}>
                    <span>{add}</span>
                    <button onClick={()=>removeTask(index)} className="dbtn">Delete</button>
                    <button onClick={()=>moveup(index)} className="upbtn">⬆️</button>
                    <button onClick={()=>movedown(index)} className="downbtn">⬇️</button>
                </li>
            )}
        </ol>
        </div>
        </div>
         )
}
export default Todoapp