import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    cardFlip:true
  }
  
  handleFlip=()=>{
    this.setState({
      cardFlip:!this.state.cardFlip
    })
  }

  render() {
    let stat = this.props.pokemon.stats.filter(stat => stat.name === "hp")
    return (
      <Card>
        <div>
          <div onClick={()=>this.handleFlip()} className="image">
            <img src= {this.state.cardFlip ? this.props.pokemon.sprites.front:this.props.pokemon.sprites.back} alt="oh no!" />
          </div>
          <div className="content">
          <div className="header">{ this.props.pokemon.name }</div>
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
}

export default PokemonCard
