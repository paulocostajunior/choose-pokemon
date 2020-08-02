import React, { Component } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Card from '../components/Card'
import {  Container } from '@material-ui/core';
import { RootStateOrAny, connect } from 'react-redux';
import { fetchPokemons } from '../actions/';
import { IPokemon } from '../models/IPokemon';

interface Props {
  pokemons: [ IPokemon ];
  fetchPokemons: () => void;
}
const mapState = (state: RootStateOrAny) => {
  return { pokemons: state.pokemons}
}

const connector = connect(mapState, { fetchPokemons });

class Main extends Component<Props> {
  componentDidMount() {
    this.props.fetchPokemons();
  }

  renderList() {
    return this.props.pokemons.map((pokemon: IPokemon) => {
      return (
        <Grid item xs={12} sm={6} md={4} key={pokemon.id}>
          <Card name={`${pokemon.name}`} img={`${pokemon.img}`} />
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
