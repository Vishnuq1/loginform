import React,{useState}  from 'react';

const App=()=>{
    const[name, setName]= useState("");
const[fullName, setfullName]=useState();





    const inputEvent=(event)=>{  // yahn ye event isliye likha h jb button click hoga toh vo ek objt release kre ga toh usko catch krne k liye 
        console.log(event.target.value);
        setName(event.target.value);
    }

    const onSubmit=()=>{
        setfullName(name);
    }

   return(
        <>
        <div>
        <h1>Hello {fullName}</h1>
        <input type="text" placeholder='Enter your name' onChange={inputEvent} value={name}></input>
        <button onClick={onSubmit}>Submit</button>
        </div>
        </>
    );
};

export default App;