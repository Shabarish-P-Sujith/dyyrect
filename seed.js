
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const MONGODB_URI = process.env.MONGODB_URI;

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, select: false },
    role: { type: String, enum: ['admin', 'customer'], default: 'customer' },
  },
  { timestamps: true }
);

UserSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const adminExists = await User.findOne({ role: 'admin' });
    if (!adminExists) {
      await User.create({ email: 'admin@gmail.com', password: 'admin123', role: 'admin' });
      console.log('Admin created');
    } else {
      console.log('Admin already exists');
    }

    const customerExists = await User.findOne({ email: 'customer@gmail.com' });
    if (!customerExists) {
      await User.create({ email: 'customer@gmail.com', password: 'customer123', role: 'customer' });
      console.log('Customer created');
    } else {
      console.log('Customer already exists');
    }

    console.log('Seed successful');
  } catch (error) {
    console.error('Seed error:', error);
  } finally {
    process.exit(0);
  }
}

seed();
