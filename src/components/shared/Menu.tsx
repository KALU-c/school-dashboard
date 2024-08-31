import { menuItems } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {
        menuItems.map(listItem => (
          <div className="flex flex-col gap-2" key={listItem.title}>
            <span className="hidden lg:block text-gray-500 font-light my-2">{ listItem.title }</span>
            {
              listItem.items.map(item => (
                <Link href={item.href} key={item.label} className="flex items-center justify-center lg:justify-start gap-4 text-gray-600 py-2">
                  <Image src={item.icon} alt={item.label} width={20} height={20} />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              ))
            }
          </div>
        ))
      }
    </div>
  )
}

export default Menu
