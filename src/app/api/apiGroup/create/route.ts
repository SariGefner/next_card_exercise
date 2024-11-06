import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/app/lib/db/mongodb';
import mongoose from 'mongoose';
import { UserSchema } from '@/app/types/userSchema';

const User = mongoose.model('User', UserSchema);

export async function POST(req: NextRequest) {
    try {
        await connectDB();
        const body = await req.json();
        const user = await User.create(body);
        return NextResponse.json(user, { status: 201 });
    } catch (error) {
        console.log('API route error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}