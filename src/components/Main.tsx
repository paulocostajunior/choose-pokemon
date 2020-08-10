import React, { Component } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Card from '../components/Card'
import {  Container } from '@material-ui/core';
import { RootStateOrAny, connect } from 'react-redux';
import { fetchPokemons } from '../actions/';
import { IPokemon } from '../models/IPokemon';

//#region Props
interface Props {
  pokemons: any;
  fetchPokemons: () => void;
}
//#endregion

//#region State
const mapState = (state: RootStateOrAny) => {
  return { pokemons: Object.values(state.pokemons)}
}
const connector = connect(mapState, { fetchPokemons });
//#endregion

//#region Component
class Main extends Component<Props> {
  componentDidMount() {
    this.props.fetchPokemons();
  }

  renderList() {
    return this.props.pokemons.map((pokemon: IPokemon) => {
      return (
        <Grid item xs={12} sm={6} md={4} key={pokemon.id}>
          <Card pokemon={pokemon} showLink={true}/>
        </Grid>
      );
    });
  }

  render() {
    
    return (
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {this.renderList()}
        </Grid>
      </Container>
    );
  };
};

export default connector(Main)
//#endregion
