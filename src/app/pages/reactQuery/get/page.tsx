'use client'

import { useQuery } from '@tanstack/react-query'
import User from '@/app/types/userType'

const fetchUsers = async () :Promise<User[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  if (!response.ok) {
    throw new Error('Problem with fetching the data')
  }
  return response.json()
}


const GetUsers = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['exampleData'],
        queryFn: fetchUsers,
        gcTime: 1000 * 60 * 5, // 5 minutes, if you want to specify garbage collection time
        staleTime: 1000 * 60 * 1, // 1 minute, if you want to specify stale time
      })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div> 
  return (
    <>
      <div>Data from API:</div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

export default GetUsers