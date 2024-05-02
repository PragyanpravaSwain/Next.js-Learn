import React from 'react'

interface Props{
    params: {id: number}
}

const userDetails = ({params: {id}}: Props) => {
  return (
    <div>
      UserDetails {id}
    </div>
  )
}

export default userDetails
