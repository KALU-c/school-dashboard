import Menu from "@/components/Menu"
import Navbar from "@/components/Navbar"
import Image from "next/image"
import Link from "next/link"

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex">
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 min-w-[50px]">
        <Link href="/" className="flex justify-center items-center lg:justify-start gap-2">
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          <span className="hidden lg:block">RK-school</span>
        </Link>
        <Menu />
      </div>
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA]">
        <Navbar />
        { children }
      </div>
    </div>
  )
}

export default layout
