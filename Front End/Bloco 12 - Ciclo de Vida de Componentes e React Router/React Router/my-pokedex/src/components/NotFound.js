import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center text-center bg-slate-50 min-h-screen">
      <Header />
      <Link
        className="inline-block my-8 bg-white py-1 px-2 rounded shadow-md transition hover:bg-slate-50"
        to="/"
      >
        Go to Pokedex
      </Link>
      <h1>This page does not exist</h1>
    </div>
  )
}
