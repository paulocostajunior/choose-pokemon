import React, { Component } from 'react';
import { Container, Grid } from '@material-ui/core';
import Card from './Card';
import { Link, RouteComponentProps } from 'react-router-dom'
import { fetchPokemon } from '../actions/';
import { IPokemon } from '../models/IPokemon';
import { RootStateOrAny, connect } from 'react-redux';
import CardDescription from './CardDescription';

//#region Types
interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams>{
  pokemon: IPokemon;
  fetchPokemon: (id: number) => void;
}
//#endregion

//#region State
const mapState = (state:RootStateOrAny, ownProps: RootStateOrAny) => { 
  return { pokemon: state.pokemons[ownProps.match.params.id] } 
}

const connector = connect(mapState, { fetchPokemon });
//#endregion

//#region component
class CardInfo extends Component<Props> { 
  componentDidMount() {
    this.props.fetchPokemon(parseInt(this.props.match.params.id));
  }
  render() {
    if (!this.props.pokemon) {
      return <div>loading</div>
    }

    return (
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card pokemon={this.props.pokemon} showLink={false}/>
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            <CardDescription description={this.props.pokemon.description} />
          </Grid>
        </Grid>
        <Container maxWidth="lg">
          <Link style={{margin: "auto"}} to={"/"}>Go Back</Link>
        </Container>
      </Container>
    );
  }
}

export default connector(CardInfo);
//#endregion