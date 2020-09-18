import React from 'react'
import '../../index.css'

import { Card } from '../card/card'



export const CardList = (props) => {
    return(
  <div className="card-list" monsters = {props.monsters}>
            {props.monsters.map( (monsters) =>
                <Card key={monsters.id} monsters = {monsters}></Card>
             )}
          
    </div>  
)}
