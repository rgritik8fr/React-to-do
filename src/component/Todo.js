import { useState } from "react";
export let Todo = () => {
    let [listValue,setlstValue] = useState([]);
    let [value , setsavevalue] = useState([]);

    let OnList =(e)=>{
        let a = e.target.value;
        setlstValue(a);


    }
    let SaveValue =(a)=>{
        setsavevalue((oldvalue)=>{
            return [...oldvalue,listValue]
        });
    }
    return (
        <>
            <div className="main_list">
                <div className="container">
                    <div className="heading">
                        <h2>Enter your Today Task</h2>
                    </div>
                    <div className="list">
                        <div className="input" onChange={OnList}>
                            <input type="text" />
                            <div className="btn"><button onClick={SaveValue}>+</button></div>
                        </div>
                    </div>
                    <div className="table">
                        <ul>
                          {value.map((tval)=>{
                              return  <li> <i class="fas fa-trash-alt icon"></i>{tval}</li>
                          })}
                            
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}