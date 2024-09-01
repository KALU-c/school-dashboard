import MainBar from "@/components/shared/Mainbar"
import Menu from "@/components/shared/Menu"
import Navbar from "@/components/shared/Navbar"
import Sidebar from "@/components/shared/Sidebar"
import Image from "next/image"
import Link from "next/link"

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex">
      <Sidebar>
        <Link href="/" className="flex justify-center items-center lg:justify-start gap-2">
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          <span className="hidden lg:block font-bold text-xl">RK-school</span>
        </Link>
        <Menu />
      </Sidebar>
      <MainBar>
        <Navbar />
        {children}
      </MainBar>
    </div>
  )
}

export default layout
