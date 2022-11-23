import React from 'react'
import { useParams } from 'react-router-dom'

export default function Category() {
    const params = useParams()
  return (
    <div>Category{params.name}</div>
  )
}
