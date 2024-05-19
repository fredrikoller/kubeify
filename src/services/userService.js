import logger from "../utils/logger.js";
import User from "../models/user.js";

export const createUser = async (userData) => {
  logger.info("Creating user");
  try {
    const user = new User(userData);
    return await user.save();
  } catch (error) {
    throw new Error(error.message);
  }
};
