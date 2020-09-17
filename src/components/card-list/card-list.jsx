import React from 'react'
import '../../index.css'



export const CardList = (props) => {
    return(
  <div className="card-list">
            {props.monsters.map( (monsters) =>
                 <h1 key={monsters.id}>{monsters.name}</h1> 
             )}
          
    </div>  
)}
