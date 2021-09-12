import React, { useState } from "react";
const Rating = () =>{
    const [list,setList] = useState([]);

    let [title, setTitle] = useState("")
    const addData = () =>{
        let newdata = [...list, {id:list.length + 1,title:title}]
        setList(newdata)
        setTitle("")
    }
    const deleteData = (id)=>{
        setList(list.filter(x =>x.id != id));

    }

    return (
        <div className="container">
            <div action="" className="d-flex">
                <input type="text" className="form-control" placeholder="enter your text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <button className="btn btn-success" onClick={()=>addData()}>Add</button>
            </div>

            <div className="list-group">
                {
                    list.map(value =>(
                        <div className="list-group-item list-group-item-action" key={value.id}>{value.id}   .  {value.title}
                        <span className="float-end ">
                            <button type="button" className="btn btn-link text-danger" onClick={()=>deleteData(value.id)}>
                            <i class="bi bi-x-circle"></i>
                            </button>
                        </span>
                        </div>
                        
                    ))}
                
                
            </div>
        </div>
    )
}
export default Rating;