import { create } from 'zustand';
import User from '../types/userType';
import UserState from '../types/userState';
import getAll from '@/app/services/userSrvices';

const useUsersStore = create<UserState>((set) => ({
  users: [],

  addUser: (user: User) =>
    set((state) => ({
      users: [...state.users, user],
    })),

  deleteUser: (id: number) => {
    set((state) => ({
      users: state.users.filter((user: User) => user.id !== id),
    }));
  },

  updateUser: (id: number, updatedUser: User) => {
    set((state) => ({
      users: state.users.map((user: User) =>
        user.id === id ? { ...user, ...updatedUser } : user
      ),
    }));
  },

  initUsers: async () => {
    try {
      const users = await getAll();
      set({ users });
    } catch (error) {
      console.error('Error initializing users:', error);
    }
  },
}));

export default useUsersStore;
