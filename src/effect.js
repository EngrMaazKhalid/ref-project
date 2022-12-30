import React, {useRef} from 'react'
import RefTutorial from './RefTutorial';

const Tutorial = () =>{

    const InputRef = useRef(null);
const onClick =() =>{
    InputRef.current.focus()
console.log(InputRef.current.value)

if(InputRef.current.value.trim.length === 0){
    console.log('khaali ha!')
}else{
InputRef.current.value=""
}}

    return( 
<div>
<input placeholder='likho g' ref={InputRef}></input>
<button onClick={onClick} > Click here!</button>

</div>
    )
}
export default Tutorial