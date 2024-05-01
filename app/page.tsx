// Home.js
import React from 'react'
import Link from 'next/link'
import ProductCart from './components/ProductCart'

export default function Home() {
  return (
    <main>
      <h1>Hello</h1>
      <Link href='/users'>Users</Link>
      <ProductCart />
    </main>
  )
}

