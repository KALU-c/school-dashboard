// outline-none => utility class is used to remove the default focus outline (often a blue or gray border) 
//                 that browsers automatically apply to focused elements such as buttons, input fields, or links.

import Image from "next/image"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="search" width={14} height={14} />
        <input type="text" placeholder="Search..." className="w-[200px] p-2 bg-transparent outline-none" />
      </div>
      <div className="flex gap-4 items-center justify-end w-full">
        <div className="relative bg-white rounded-md w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="message" width={20} height={20} />
          <span className="absolute -top-3 -right-3 w-5 h-5 bg-purple-500 text-white flex justify-center items-center rounded-full text-xs">3</span>
        </div>
        <div className="relative bg-white rounded-md w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/announcement.png" alt="message" width={20} height={20} />
          <span className="absolute -top-3 -right-3 w-5 h-5 bg-purple-500 text-white flex justify-center items-center rounded-full text-xs">1</span>
        </div>
        <div className="hidden sm:flex sm:flex-col">
          <span className="text-xs leading-3 font-medium">John Doe</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Image src="/avatar.png" alt="avatar" width={36} height={36} className="rounded-full" />
      </div>
    </div>
  )
}

export default Navbar
