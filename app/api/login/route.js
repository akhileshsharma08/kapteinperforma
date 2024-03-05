// pages/api/login.js
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import connectMongoDb from '@/app/utils/connection';
import User from '@/app/models/user';
import { setCookie } from 'next-cookies';

export async function POST(request) {
  try {
    const { userphone, password } = await request.json();

    
    if (!userphone || !password) {
      return NextResponse.json({ message: 'all fields are required!' }, { status: 400 });
    }

    // Connect to MongoDB
    await connectMongoDb();

    // Find user by userphone in the database
    const user = await User.findOne({ userphone });

    // Check if the user exists
    if (!user) {
      return NextResponse.json({ message: 'User not found', status: 404 });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await compare(password, user.password);

    if (passwordMatch) {
      // Generate a JWT token with user ID
      const token = sign({ userId: user._id }, process.env.secret, {
        expiresIn: '1d',
      });

      // Set the token in localStorage
      return NextResponse.json(
        { message: 'Login successful', status: 200, token },
        { headers: { 'Set-Cookie': `token=${token}; path=/; HttpOnly` } }
      );
      // return NextResponse.json({ message: 'Login successful', token, status: 200 });
    } else {
      return NextResponse.json({ message: 'Invalid userphone or password', status: 401 });
    }
  } catch (error) {
    console.error('Something went wrong :', error);
    return NextResponse.json({ message: 'Internal Server Error', status: 500 });
  }
}
