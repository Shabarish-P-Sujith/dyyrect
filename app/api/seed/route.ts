import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import User from '@/models/User';

export async function GET() {
  try {
    await connectToDatabase();

    // Check if admin already exists
    const adminExists = await User.findOne({ role: 'admin' });
    let adminCreated = false;

    if (!adminExists) {
      await User.create({
        email: 'admin@gmail.com',
        password: 'admin123',
        role: 'admin',
      });
      adminCreated = true;
    }

    // Check if customer already exists
    const customerExists = await User.findOne({ email: 'customer@gmail.com' });
    let customerCreated = false;

    if (!customerExists) {
      await User.create({
        email: 'customer@gmail.com',
        password: 'customer123',
        role: 'customer',
      });
      customerCreated = true;
    }

    return NextResponse.json({
      message: 'Database seeding complete',
      adminCreated,
      customerCreated,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
