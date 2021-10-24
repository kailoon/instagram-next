import Image from "next/image"
import {
  MenuIcon,
  SearchIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
} from "@heroicons/react/outline"
import { HomeIcon } from "@heroicons/react/solid"
import { signIn, signOut, useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { modalState } from "../atoms/modalAtom"
import { useRecoilState } from "recoil"

function Header() {
  const { data: session } = useSession()
  const [open, setOpen] = useRecoilState(modalState)
  const router = useRouter()

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* left */}
        <div
          onClick={() => router.push("/")}
          className="relative w-24 hidden lg:inline-grid cursor-pointer"
        >
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div
          onClick={() => router.push("/")}
          className="relative w-10 lg:hidden flex-shrink-0"
        >
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* middle */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="bg-yellow-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:bg-white placeholder-gray-400"
            />
          </div>
        </div>

        {/* right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon onClick={() => router.push("/")} className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />

          {session ? (
            <>
              <div className="relative navBtn">
                <div className="absolute z-10 -top-2 -right-1 bg-red-500 rounded-full text-xs h-5 w-5 text-white flex items-center justify-center animate-pulse">
                  3
                </div>
                <PaperAirplaneIcon className="navBtn rotate-45" />
              </div>
              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className="navBtn"
              />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />

              <img
                onClick={signOut}
                src={session?.user?.image}
                width="40"
                height="40"
                alt="avatar"
                className="h-10 w-10 rounded-full cursor-pointer"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header