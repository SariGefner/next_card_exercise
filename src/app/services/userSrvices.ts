import axios from 'axios';
import User from '@/app/types/userType'

 const getAll = async (): Promise<User[]> => {
    try {
        const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
        return response.data;

        } catch (error) {
               console.error('Error fetching users:', error)
               throw error
        }
    }
    export default getAll
