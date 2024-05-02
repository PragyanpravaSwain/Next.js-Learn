import { notFound } from 'next/navigation'
import React from 'react'

interface Props{
    params: {id: number}
}

const userDetails = ({params: {id}}: Props) => {
  if(id > 10) notFound();

  return (
    <div>
      UserDetails {id}
    </div>
  )
}

export default userDetails
