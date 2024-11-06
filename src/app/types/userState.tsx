import User from './userType';

interface UserState {
  users: User[];
  addUser: (user: User) => void;
  deleteUser: (id: number) => void;
  updateUser: (id: number, user: User) => void;
  initUsers: () => Promise<void>;
}

export default UserState;
