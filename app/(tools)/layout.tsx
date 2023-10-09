import { Navbar } from "@/components/Navbar"
import { Sidebar } from "@/components/Sidebar"

const ToolsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative w-full">
      <div className='h-full hidden md:flex md:flex-col md:fixed md:inset-y-0 z-50 w-72'>
        <Sidebar />
      </div>
      <Navbar />
      <main className="pl-72 w-full">
        {children}
      </main>
    </div>
  )
}

export default ToolsLayout
