
import { UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <main className="min-h-screen bg-red-500">
      <UserButton afterSignOutUrl="/"/>
      <p>Hello</p>
    </main>
  )
}


