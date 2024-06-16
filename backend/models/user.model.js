import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    maxlength: [50, 'First name should be less than 50 characters']
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
    maxlength: [50, 'Last name should be less than 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    maxlength: [100, 'Email should be less than 100 characters'],
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [8, 'Password should be at least 8 characters long']
  },
  roles: {
    type: [String],
    enum: ['user', 'admin'],
    default: ['user']
  },
  address: {
    street: { type: String, trim: true, maxlength: [100, 'Street should be less than 100 characters'] },
    city: { type: String, trim: true, maxlength: [50, 'City should be less than 50 characters'] },
    state: { type: String, trim: true, maxlength: [50, 'State should be less than 50 characters'] },
    zipCode: { type: String, trim: true, maxlength: [10, 'Zip code should be less than 10 characters'] },
    country: { type: String, trim: true, maxlength: [50, 'Country should be less than 50 characters'] }
  },
  phoneNumber: {
    type: String,
    trim: true,
    maxlength: [15, 'Phone number should be less than 15 characters']
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', userSchema);

export default User;
