import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest, {params}: {params: {id: number}}){

    if(params.id > 10)
    return NextResponse.json(
        {error: 'user not exist'}, 
        {status: 404}
    );

    return NextResponse.json({id: 1, name: 'Mosh'});
}

export async function PUT(request: NextRequest, {params}: {params: {id: number}}) {

    //validate the request body if invalid return 400
    const body = await request.json();
    if(!body.name)
        return NextResponse.json({error: 'name is required'}, {status: 400});

    //Fetch the user with the given id
    if(params.id > 10)
        return NextResponse.json({error: 'User does not exist'}, {status: 404});

    return NextResponse.json({id: 1, name: body.name});
}

export async function DELETE(request: NextRequest, {params}: {params: {id: number}}){
    const body = await request.json();

    if(params.id > 10)
        return NextResponse.json({error: 'User not found'}, {status: 404});

    return NextResponse.json({});

}

