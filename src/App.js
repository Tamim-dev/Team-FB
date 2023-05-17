import { useState,useEffect } from 'react';
import { getDatabase, ref, set,remove, onValue,push } from "firebase/database";
import './App.css';

function App() {

  const db = getDatabase();

  let [historyarr,setHistoryArr] =useState ([])
  let [add,setAdd] = useState("")
  let [division,setDivision] = useState("")
  let [multi,setMulti] = useState("")
  let [sub,setSub] = useState("")
  let [error,setError] = useState (false)
  let [errora,setErrorA] = useState (false)
  let [erroremt,setErrorEmt] = useState (false)
  let [count,setCount] = useState(0)
  

  useEffect (()=>{
    const teamRef = ref(db, 'Team-fb/');

    onValue(teamRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item)=>{
        arr.push({...item.val(),id:item.key})
      })
      setHistoryArr(arr)
  });
  },[])

  
  let handelClick =()=>{
    
      if(add !== "" && division == "" && multi == "" && sub == ""){
        setAdd("")
        setError(false)
        setErrorA(false)
        setErrorEmt(false)
        if (add - 10 || add == 10) {
          setCount(add)
          setCount(count + add *1)
          setErrorA(false)
          set(push(ref(db, 'Team-fb/')), {
            addvalue : add,count
          }).then=()=>{
            console.log("Data geca")
          }
        } else {
          setErrorA(true)
          setError(false)
        }
        
  
      }else if(add =="" && division !== "" && multi == "" && sub == ""){
          setDivision("")
          setError(false)
          setErrorA(false)
        if (division - 10 || division == 10) {
          setCount(count / division)
          set(push(ref(db, 'Team-fb/')), {
            divivalue : division,count
          }).then=()=>{
            console.log("Data geca")
          }
          if(count == 0 && division - 10 || division == 10){
            setErrorEmt(true)
          }
          setError(false)
        } else {
            setErrorA(true)
        }
  
      }else if(add =="" && division == "" && multi !== "" && sub == ""){
          setMulti("")
          setError(false)
          setErrorA(false)
        if (multi - 10 || multi == 10) {
          set(push(ref(db, 'Team-fb/')), {
            multivalue : multi,count
          }).then=()=>{
            console.log("Data geca")
          }
          if(count == 0 && multi - 10 || multi == 10){
            setErrorEmt(true)
          }
          setCount(count * multi)
          setError(false)
        } else {
          setErrorA(true)
        }
  
      }else if(add =="" && division == "" && multi == "" && sub !== ""){
        setSub("")
        setError(false)
        setErrorA(false)
        if (sub - 10 || sub == 10) {
          set(push(ref(db, 'Team-fb/')), {
            subvalue : sub,count
          }).then=()=>{
            console.log("Data geca")
          }
          if(count == 0 && sub - 10 || sub == 10){
            setErrorEmt(true)
          }
          setCount(count - sub)
          setError(false)
        } else {
            setErrorA(true)
        }
  
      }else{
        setError(true)
        setErrorA(false)
        setAdd("")
        setDivision("")
        setMulti("")
        setSub("")
      }
  }
  return (
    <>
    <h1 className='container mx-auto text-center text-6xl font-bold mb-2 font-mono'>Calculation</h1>
    <div className='container mx-auto mt-8 flex'>
    <div className='w-[65%]  bg-green-400 p-10'>
    <div className='flex justify-between mt-10'>
    <div>
    <h1 className='text-center text-3xl font-semibold mb-2'>Add</h1>
    <input className=' border-[3px] rounded-lg p-1' onChange={(e)=>setAdd(e.target.value)} value={add}/>
    </div>
    <button className='border-[3px] px-5 rounded-lg bg-white text-3xl font-semibold' onClick={handelClick}>Submit</button>
    <div>
    <h1 className='text-center text-3xl font-semibold mb-2'>Division</h1>
    <input className=' border-[3px] rounded-lg p-1' onChange={(e)=>setDivision(e.target.value)} value={division}/>
    </div>
    </div>
    <div className='text-center text-4xl relative top-28'>{count}</div>
    <div className='flex justify-between mt-[250px] mb-10 '>
    <div>
    <h1 className='text-center text-3xl font-semibold mb-2'>Multipication</h1>
    <input className=' border-[3px] rounded-lg p-1' onChange={(e)=>setMulti(e.target.value)} value={multi}/>
    </div>
    <div className='relative -top-[60px] text-3xl text-center'>
    {error && <h2>No input value !</h2>}
    {errora && <h2>Enter a number !</h2>}
    {erroremt && <h2>From zero you can't subtract or multiply or divide</h2>}
    </div>
    <div>
    <h1 className='text-center text-3xl font-semibold mb-2'>Substraction</h1>
    <input className=' border-[3px] rounded-lg p-1' onChange={(e)=>setSub(e.target.value)} value={sub}/>
    </div>
    </div>
    </div>
    <div className='w-[35%] bg-red-400'>
    <h2 className='text-center mt-20 text-3xl font-semibold'>History</h2>
    <ol className='list-decimal text-2xl font-medium'>
      {historyarr.map((item,index)=>(
        <li className='ml-8' key={index}>{item.count} added by {item.addvalue}{item.divivalue}{item.multivalue}{item.subvalue} </li>
      ))}
    </ol>
    </div>
    
    </div>
    </>
  );
}

export default App;
