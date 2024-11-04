import User from '../models/User.js';

const getAllUsers = async () => {
  return await User.find();
};

const createUser = async (userData) => {
  return await User.create(userData);
};

export default {
  getAllUsers,
  createUser,
};
