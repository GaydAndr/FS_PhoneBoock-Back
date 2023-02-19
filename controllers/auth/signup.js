const { nanoid } = require('nanoid');

const bcrypt = require('bcryptjs');
require('dotenv').config();
const gravatar = require('gravatar');

const { User } = require('../../models/user');
const { RequestError } = require('../../helpers');

const signup = async (req, res) => {
  const { userName, email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw RequestError(409, 'Email in use');
  }
  if (user) {
    throw RequestError(400, 'Missing required fields');
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const verificationToken = nanoid();

  const result = await User.create({
    userName,
    email,
    password: hashPassword,
    avatarURL: gravatar.url(email),
    verificationToken,
  });

  res.status(201).json({
    userName: result.userName,
    email: result.email,
  });
};

module.exports = signup;
