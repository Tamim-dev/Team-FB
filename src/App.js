import { useState } from 'react';
import './App.css';

function App() {

  let [add,setAdd] = useState("")
  let [division,setDivision] = useState("")
  let [multi,setMulti] = useState("")
  let [sub,setSub] = useState("")
  let [error,setError] = useState (false)
  
  let handelClick =()=>{
    if(add !="" && division == "" && multi == "" && sub == ""){
      console.log("thik asa");
    }else if(add ="" && division !== "" && multi == "" && sub == ""){

    }else if(add ="" && division == "" && multi !== "" && sub == ""){

    }else if(add ="" && division == "" && multi == "" && sub !== ""){

    }else{
      setError(false)
    }

    
  }
  return (
    <div className='container mx-auto flex'>
    <div className='w-[60%]  bg-green-400 p-5'>
    <div className='flex justify-between mt-7'>
    <div>
    <h1>Add</h1>
    <input className=' border-[3px]' onChange={(e)=>setAdd(e.target.value)}/>
    </div>
    <button className='border-[3px]' onClick={handelClick}>Submit</button>
    <div>
    <h1>Division</h1>
    <input className=' border-[3px]' onChange={(e)=>setDivision(e.target.value)}/>
    </div>
    </div>
    <div className='flex justify-between mt-[100px] '>
    <div>
    <h1>Multipication</h1>
    <input className=' border-[3px]' onChange={(e)=>setMulti(e.target.value)}/>
    </div>
    {error && <h2>Enter a value</h2>}
    <div>
    <h1>Substraction</h1>
    <input className=' border-[3px]' onChange={(e)=>setSub(e.target.value)}/>
    </div>
    </div>
    </div>
    <div className='w-[40%] bg-red-400'></div>
    
    </div>
  );
}

export default App;
