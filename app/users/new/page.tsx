'use client';
import { useRouter } from 'next/navigation';
import React from 'react'

const NewPage = () => {

  const routes = useRouter();
  
  return (
    <button className='btn btn-primary' onClick={() => routes.push('/users')}>Create</button>
  )
}

export default NewPage;
