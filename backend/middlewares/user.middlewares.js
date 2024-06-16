import bcrypt from 'bcrypt';
import User from '../models/user.model.js';

export const hashPassword = async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
};

export const comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Add middlewares to the user schema
User.schema.pre('save', hashPassword);
User.schema.methods.comparePassword = comparePassword;
