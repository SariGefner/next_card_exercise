import { NextRequest, NextResponse } from 'next/server';

export async function PUT(request: NextRequest) {
    return NextResponse.json({
        method: 'PUT',
        message: 'this was the update operation'
    });
}