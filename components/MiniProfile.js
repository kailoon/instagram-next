import { signOut, useSession } from "next-auth/react"

function MiniProfile() {
  const { data: session } = useSession()

  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src={session?.user?.image}
        alt="avatar"
        className="p-[2px] border rounded-full cursor-pointer w-16 h-16"
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">{session?.user?.username}</h2>
        <p className="text-sm text-gray-400">Welcome to Instagram.</p>
      </div>
      <button className="text-blue-400 text-sm font-semibold" onClick={signOut}>
        Sign Out
      </button>
    </div>
  )
}

export default MiniProfile
