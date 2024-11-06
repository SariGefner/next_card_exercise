"use client";

import React, { useState, useEffect } from "react";
import useUsersStore from "../store/useStore";
import User from "../types/userType";

const UserList = () => {
    const [newUser, setNewUser] = useState<Partial<User>>({
        name: '',
        email: '',
        phone: '',
        website: ''
    });

    const users = useUsersStore((state) => state.users);
    const addUser = useUsersStore((state) => state.addUser);
    const deleteUser = useUsersStore((state) => state.deleteUser);
    const updateUser = useUsersStore((state) => state.updateUser);
    const initUsers = useUsersStore((state) => state.initUsers);
    const [editingId, setEditingId] = useState<number | null>(null);

    useEffect(() => {
        initUsers();
    }, [initUsers]);

    const handleAddUser = () => {
        if (newUser.name && newUser.email && newUser.phone && newUser.website) {
            const userToAdd: User = {
                id: Date.now(),
                name: newUser.name,
                email: newUser.email,
                phone: newUser.phone,
                website: newUser.website
            };
            addUser(userToAdd);
            setNewUser({
                name: '',
                email: '',
                phone: '',
                website: ''
            });
        }
    };

    const handleUpdateUser = (id: number) => {
        if (newUser.name && newUser.email && newUser.phone && newUser.website) {
            const updatedUser: User = {
                id: id,
                name: newUser.name,
                email: newUser.email,
                phone: newUser.phone,
                website: newUser.website
            };
            updateUser(id, updatedUser);
            setEditingId(null);
            setNewUser({
                name: '',
                email: '',
                phone: '',
                website: ''
            });
        }
    };

    const startEditing = (user: User) => {
        setEditingId(user.id);
        setNewUser({
            name: user.name,
            email: user.email,
            phone: user.phone,
            website: user.website
        });
    };

    const cancelEditing = () => {
        setEditingId(null);
        setNewUser({
            name: '',
            email: '',
            phone: '',
            website: ''
        });
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Users Management
            </h1>

            {/* Form Section */}
            {!editingId ? (
                <div className="mb-8 bg-gray-50 p-6 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            value={newUser.name || ''}
                            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                            placeholder="Enter name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="email"
                            value={newUser.email || ''}
                            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                            placeholder="Enter email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            value={newUser.phone || ''}
                            onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
                            placeholder="Enter phone"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            value={newUser.website || ''}
                            onChange={(e) => setNewUser({ ...newUser, website: e.target.value })}
                            placeholder="Enter website"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        onClick={handleAddUser}
                        className="mt-4 w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Add User
                    </button>
                </div>
            ) : (
                <div className="mb-8 bg-gray-50 p-6 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            value={newUser.name || ''}
                            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="email"
                            value={newUser.email || ''}
                            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            value={newUser.phone || ''}
                            onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            value={newUser.website || ''}
                            onChange={(e) => setNewUser({ ...newUser, website: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex gap-2 mt-4">
                        <button
                            onClick={() => handleUpdateUser(editingId)}
                            className="flex-1 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            Save Update

                        </button>
                        <button
                            onClick={cancelEditing}
                            className="flex-1 px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            {/* Users List Section */}
            <ul className="space-y-3">
                {users.map((user) => (
                    <li
                        key={user.id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    >
                        <div className="flex-1">
                            <h3 className="font-semibold text-gray-800">{user.name}</h3>
                            <p className="text-gray-600 text-sm">{user.email}</p>
                            <div className="flex gap-4 mt-1 text-gray-500 text-sm">
                                <span>{user.phone}</span>
                                <span>{user.website}</span>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => startEditing(user)}
                                className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            >
                                Update
                            </button>
                            <button
                                onClick={() => deleteUser(user.id)}
                                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;