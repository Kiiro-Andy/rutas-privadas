import React from 'react'
import { Link } from 'react-router-dom'

export const DashboardPage = () => {
  return ( <>
    <h1>DashboardPage</h1>

    <Link to="/rokan">Conoce a Rokan</Link>
    <Link to="/kiirome">Conoce a Kiirome</Link>
  </>  
  )
}
