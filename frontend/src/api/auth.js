// src/api/auth.js

import axiosClient from '../lib/axios';

export const login = async (email, password) => {
  await axiosClient.get('/sanctum/csrf-cookie');
  const res = await axiosClient.post('/api/login', { email, password });
  return res.data;
};

export const getUser = async () => {
  const res = await axiosClient.get('/api/user');
  return res.data;
};
