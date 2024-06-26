import React from 'react'
import UserTable from './UserTable';
import Link from 'next/link';

interface Props{
  searchParams: {sortOrder: string}
}

const UsersPage = ({searchParams: {sortOrder}}: Props) => {
  
  return (
    <div>
      <Link href="/users/new" className='btn'>New User</Link>
      <UserTable sortOrder = {sortOrder}/>
    </div>
  )
}

export default UsersPage;
