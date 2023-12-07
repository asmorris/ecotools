import { UserButton } from "@clerk/nextjs"
import { MobileSidebar } from "./MobileSidebar"
import { ToggleColourMode } from "./ToggleColourMode"

export const Navbar = () => {
  return (
    <div className="bg-emerald-950 dark:bg-sky-950 flex items-center p-4 w-full h-24">
      <MobileSidebar />
      <div className="flex w-full justify-end gap-4">
        <ToggleColourMode />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  )
}
