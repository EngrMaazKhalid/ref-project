
import React, {useState, useReducer, useMemo, useCallback} from 'react'
import './App.css';
import Tutorial from './effect';
import RefTutorial from './RefTutorial';



function App() {
  const reducer= ( state, action) =>{
    if(action.type === "ADD"){
      return {count : state.count + 1, ShowText : state.ShowText}
    }
    else if( action.type === "ShowText"){
      return {count: state.count , ShowText: !state.ShowText}
    }
    else if( action.type === "clear"){
      return {count : 0}
    }
  }
const [state, dispatch] = useReducer( reducer, {count: 0 ,ShowText : false})

// {
//   const[value , setValue] = useState('Maaz')
//   const [count, setCount] = useState(0)
//   const onChange=(event)=>{
//  let newValue =event.target.value;
//  setValue(newValue)
//   }
//   const onClick= () =>{
//     let newCount = count + 1 <input placeholder='Naam likh oye apna' onChange={onChange}></input>  {value}
//     setCount(newCount)
//   }}



///to use useMemo hook 
const [Count, setCount] = useState(0)
const [Item, setItem] = useState(10)

const MultiCountMemo = useMemo(function MultiCount(){
  console.log('hi!!!!')
  return Count*2
}, [Count])
  return (
    <div className="App">
      <div> 
      <h1>{state.count}</h1>
      <button onClick={() =>{
        dispatch({type : "ADD"});
        dispatch({type : "ShowText"});

      }} > Click karo ustaad</button>
      </div>
      {state.ShowText && <p>This is a number</p>}
<button onClick={() => {
  dispatch({type: "clear"})
}}> Clear! </button>

<div>
// {"follwing is used for useMemo hook example"}
<h2>Count :{Count}</h2>
<h2>Item :{Item}</h2>
<h2>{MultiCountMemo}</h2>

<button onClick={() =>{
  setCount(Count+1)
}}>UPDATE!</button>
<button onClick={() =>{
  setItem(Item*10)
}}> UPDATE ITEM!</button>
</div>
{"useRef Hook....."}
<Tutorial/>


    </div>
    

  );
}

export default App;
