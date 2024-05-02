import React from 'react'

interface Props{
    params:{id:number; photoId: number}
}

const photoDetails = ({params: {id, photoId}}: Props) => {
  return (
    <div>
      UserDetails {id} {photoId}
    </div>
  )
}

export default photoDetails