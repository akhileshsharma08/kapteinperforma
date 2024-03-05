// pages/api/register.js
import { hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import connectMongoDb from '@/app/utils/connection';
import User from '@/app/models/user';

export async function POST(request) {
  try {
    const { userphone, password } = await request.json();
    await connectMongoDb();
    
    const user = await User.findOne({ userphone });
    if (user) {
      return new Response("Username already exist", { status: 400 });
    }
    const hashedPassword = await hash(password, 10);
    // Save user data to MongoDB
    const newUser = await User.create({ userphone, password: hashedPassword });

    // Generate a JWT token with user ID
    const token = sign({ userId: newUser._id }, process.env.secret, {
      expiresIn: '1h',
    });

    return NextResponse.json({ message: 'User created', token, status: 201 });
  } catch (error) {
    console.error('Error during user registration:', error);
    return NextResponse.json({ message: 'Internal Server Error', status: 500 });
  }
}