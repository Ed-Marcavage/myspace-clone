import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';


export async function POST(req: Request) {
    const session = await getServerSession();
    const currentUserEmail = session?.user?.email!;
    const { targetUserId } = await req.json();

    const currentUserId = await prisma.user
        .findUnique({ where: { email: currentUserEmail } })
        .then((user) => user?.id!);

    // const record = await prisma.follows.create({
    //     data: {
    //         followerId: currentUserId,
    //         followingId: targetUserId,
    //     },
    // });

    return NextResponse.json(currentUserId);
}

export async function DELETE(req: NextRequest) {

    const session = await getServerSession();
    const currentUserEmail = session?.user?.email!;
    const targetUserId = req.nextUrl.searchParams.get('targetUserId');

    const currentUserId = await prisma.user
        .findUnique({ where: { email: currentUserEmail } })
        .then((user) => user?.id!);

    // const record = await prisma.follows.delete({
    //     where: {
    //         followerId_followingId: {
    //             followerId: currentUserId,
    //             followingId: targetUserId!,
    //         },
    //     },
    // });

    return NextResponse.json(currentUserId);
}