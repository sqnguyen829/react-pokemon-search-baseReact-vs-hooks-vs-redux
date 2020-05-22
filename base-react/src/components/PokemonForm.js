import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleName = (e) => this.setState({name:e.target.value})
  handleHp = (e) => this.setState({hp:e.target.value})
  handleBackUrl = (e) => this.setState({frontUrl:e.target.value})
  handleFrontUrl = (e) => this.setState({backUrl:e.target.value})

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addPokemon(this.state)
    this.setState({
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid value = { this.state.name } label="Name" placeholder="Name" name="name" onChange={(e) => this.handleName(e) }/>
            <Form.Input fluid value = { this.state.hp } label="hp" placeholder="hp" name="hp" onChange={(e) => this.handleHp(e) }/>
            <Form.Input fluid value = { this.state.frontUrl } label="Front Image URL" placeholder="url" name="frontUrl" onChange={(e) => this.handleBackUrl(e) }/>
            <Form.Input fluid value = { this.state.backUrl } label="Back Image URL" placeholder="url" name="backUrl" onChange={(e) => this.handleFrontUrl(e) }/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
