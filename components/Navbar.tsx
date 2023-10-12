import { UserButton } from "@clerk/nextjs"
import { MobileSidebar } from "./MobileSidebar"

export const Navbar = () => {
  return (
    <div className="flex items-center p-4 w-full h-24">
      <MobileSidebar />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  )
}
