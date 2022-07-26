
import React, { useEffect, useState } from 'react'

// import React from 'react'

function useDebounce (value,delay)  {
    console.log(delay,value,"lol")

const [debounce,setDebounce]=useState(value);

useEffect(()=>{
    const handler=setTimeout(
        ()=>{setDebounce(value)},delay)
    
    return ()=>{
        clearTimeout(handler)
    };
},[value,delay]);
return debounce;

 
}

export default useDebounce