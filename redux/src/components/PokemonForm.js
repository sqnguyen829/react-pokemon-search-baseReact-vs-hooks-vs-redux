import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { handleAddPokemon } from '../actions/pokemonActions'
function PokemonForm(props) {

  let dispatch = useDispatch()
  let [pokemonForm, setForm] = useState({name:'',hp:'', frontUrl:'', backUrl:''})

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={(e) => dispatch(handleAddPokemon(e, pokemonForm, setForm))}>
        <Form.Group widths="equal">
          <Form.Input fluid value = { pokemonForm.name } label="Name" placeholder="Name" name="name" onChange={(e) => setForm({...pokemonForm, name: e.target.value}) }/>
            <Form.Input fluid value = { pokemonForm.hp } label="hp" placeholder="hp" name="hp" onChange={(e) => setForm({...pokemonForm, hp:e.target.value}) }/>
            <Form.Input fluid value = { pokemonForm.frontUrl } label="Front Image URL" placeholder="url" name="frontUrl" onChange={(e) => setForm({...pokemonForm, frontUrl:e.target.value}) }/>
            <Form.Input fluid value = { pokemonForm.backUrl } label="Back Image URL" placeholder="url" name="backUrl" onChange={(e) => setForm({...pokemonForm, backUrl:e.target.value}) }/>
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  )
}

export default PokemonForm