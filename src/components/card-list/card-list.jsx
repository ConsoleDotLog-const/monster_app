import React from 'react'
import '../../index.css'

import { Card } from '../card/card'

export const CardList = props => (
    
<div className="card-list">
{props.monsters.map(monsters => (
<Card key={monsters.id} monsters = {monsters}/>

))}
</div>
)