import Image from 'next/image'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation';


export default async function Home() {
  const session = await getServerSession();

  if (!session) {
    redirect('/api/auth/signin');
    // return <p>You must be signed in...</p>
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    </main>
  )
}
