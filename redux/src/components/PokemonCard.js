import React, { useState } from 'react'
import { Card } from 'semantic-ui-react'

function PokemonCard(props) {

  let [cardFlip, setFlip] = useState(true)

  let stat = props.pokemon.stats.filter(stat => stat.name === "hp")
  return (
    <Card>
        <div>
          <div onClick={()=>setFlip(!cardFlip)} className="image">
            <img src= {cardFlip ? props.pokemon.sprites.front:props.pokemon.sprites.back} alt="oh no!" />
          </div>
          <div className="content">
          <div className="header">{ props.pokemon.name }</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {stat[0].value}
            </span>
          </div>
        </div>
      </Card>
  )
}

export default PokemonCard
