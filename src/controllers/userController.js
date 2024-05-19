import User from "../models/user.js";
import { createUser } from "../services/userService.js";

export const getUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const create = async (req, res) => {
  var user = req.body;
  try {
    const newUser = await createUser(user);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
