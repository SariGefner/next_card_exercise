import { NextRequest ,  NextResponse } from 'next/server';

export  async  function GET( request: NextRequest ){
    return NextResponse.json({
        method: 'GET',
        message: 'this was a GET operation'
    })
} 

