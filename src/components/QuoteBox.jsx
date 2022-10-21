import React, { useState } from "react";
import quore from  './quore.json'

console.log(quore);

const QuoteBox = ()=>{

let colors=["#75a5fd","#d5496c","#68e583","#e739c3","#fda024"]
let randomColors=Math.floor(Math.random() * colors.length)

let random=Math.floor(Math.random() * quore.length)

const [index,setIndex] = useState(random);

const changeCard=()=>{
  const random2=Math.floor(Math.random() * quore.length);
    setIndex(random2)
}

document.body.style=`background:${colors[randomColors]}`
  return(
    <div className='Card' style={{color:colors[randomColors]}}>
      <h2><i class="fa-solid fa-quote-left"></i> {quore[index].quote}<i class="fa-solid fa-quote-right"></i></h2>
      <div className='button-box'>
        <h3> {quore[index].author}</h3>
        <button onClick={changeCard} style={{background:colors[randomColors]}}>
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default QuoteBox;

