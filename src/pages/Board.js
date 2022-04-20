import React from 'react'
import { useParams } from 'react-router-dom';

export default function Board() {
    const { name } = useParams();
  return (
    <div>Board {name}</div>
  )
}

