import React,{useState}  from 'react';

const App=()=>{
    const[name, setName]= useState("");
    const[name1, setName1]= useState("");
const[fullName, setfullName]=useState();
const[fullName1, setfullName1]=useState();





    const inputEvent=(event)=>{  // yahn ye event isliye likha h jb button click hoga toh vo ek objt release kre ga toh usko catch krne k liye 
        console.log(event.target.value);
        setName(event.target.value);
    }

    const inputEvent1=(event1)=>{  // yahn ye event isliye likha h jb button click hoga toh vo ek objt release kre ga toh usko catch krne k liye 
        console.log(event1.target.value);
        setName1(event1.target.value);
    }





    const onSubmit=(event)=>{
        event.preventDefault();
       // event1.preventDefault();
        setfullName(name);
        setfullName1(name1);
    }

    // const onSubmit=()=>{
    //     setfullName1(name1);
    // }

   return(
        <>
        <div>
        <form onSubmit={onSubmit}>
        <h1>Hello {fullName} {fullName1}</h1>
        <input type="text" placeholder='Enter your name' onChange={inputEvent} value={name}></input>

        <input type="text" placeholder='Enter your name' onChange={inputEvent1} value={name1}></input>

        <button type="submit">Submit</button>
       
        </form>
        </div>
        </>
    );
};

export default App;