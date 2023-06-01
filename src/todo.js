import React, {useState} from 'react'

export default function Todo() {
  
  let [list,setList]=useState("");
  let [newList,addNewList]=useState([]);
  

  const addList= ()=>{
    if(list!=="")
    {
      addNewList((old)=>{
        return [...old,list]
      })
  
    console.log(newList)
    setList("");
  }
  }
  const takeInput= (e)=>{
    setList(e.target.value)
  }

  const del=(index)=>{
    addNewList((old)=>{
      return old.filter((val,ind)=> index!==ind)})
  }

  return (
    <>
        <div className="wrapper">
             <header>Todo App</header>
            <div className="inputField">
          <input type="text" className="in" placeholder="input you list" onChange={takeInput} value={list}/>
          <button className="btn" onClick={addList} >➕</button>
            </div>
               

            <div className="todoList">
              { newList.length>0?
                (<><span>You have <span className="pendingTasks"></span>these task to complete today</span></>)
              :(<></>)
              }
            <ul class="list-group">
  

             {newList.length>0?newList.map((val,index)=>{
             return(<><li class="list-group-item d-flex justify-content-between align-items-center">
    {val}
    <span class="badge bg-primary rounded-pill" onClick={()=>{del(index)}}> ✖</span>
  </li>
             </>);
             }):<>list is empty</>
             }
            </ul>
            </div>
             <div className="footer">
       </div>
    </div>
    </>  
  )
}
