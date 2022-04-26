import React from 'react'
import { CssBaseline, makeStyles, Paper } from '@mui/material'
import Title from './Title'
import Card from './Card'
import InputContainer from './InputContainer'

const useStyle = makeStyles((theme) => ({
    root: {
        width: '300px',
        backgroundColor: '#EBECF0',
        marginLeft: theme.spacing(1)
    }
}))

export default function CardList() {
    const classes = useStyle()
  return (
    <div><Paper className={classes.root}>
        <CssBaseline />
        <Title />
        <Card />
        <Card />
        <Card />
        <InputContainer />
        </Paper></div>
  )
}
