import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MediaCard from '../components/Card';
import Card from '../components/Card'
import { Box, Container } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';
import history from '../history';

export default function Main() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
            <Card name="Squirtle" img="squirtle" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <Card name="Charmander" img="char"/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <Card name="Bulbasaur" img="bulba"/>
        </Grid>
      </Grid>
    </Container>
  );
}
