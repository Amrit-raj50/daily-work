import React from "react";
import { useState } from "react";

export default function Like(){
    const [isLike , setLike] = useState(false);
    const [count , setCount] = useState(0);

    function handleLike(){
        if(isLike){
            setLike(false);
        }else{
            setLike(true);
        }
    }

    return(
        <>
        <button onClick={()=>{
            handleLike();
            if(isLike){
                setCount(count + 1);
            }
        }} >{isLike ? 'Like' : 'Liked'}</button>
        <h1>like count : {count}</h1>
        </>
    )
}